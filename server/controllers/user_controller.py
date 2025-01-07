from flask import request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import create_access_token

class UserController:
    def __init__(self, db):
        # Delay the import of UserModel to avoid circular import during initialization
        from models.user_model import UserModel
        self.user_model = UserModel(db)

    def register(self):
        data = request.get_json()
        user = self.user_model.find_user_by_email(data['email'])
        if user:
            return jsonify({"message": "Email already registered!"}), 400
        new_user = self.user_model.register_user(data['name'], data['email'], data['password'])
        return jsonify({"message": "User registered successfully!"}), 201

    def login(self):
        data = request.get_json()
        user = self.user_model.find_user_by_email(data['email'])
        if not user or not self.user_model.check_password(user['password'], data['password']):
            return jsonify({"message": "Invalid credentials!"}), 401
        
        # Create access token
        access_token = create_access_token(identity=user['email'])

        # Return the token and user info (username and name)
        return jsonify({
            'access_token': access_token,
            'email': user['email'],
            'name': user['name']
        }), 200

    def admin_register(self):
        data = request.get_json()
        # Check if the user already exists
        user = self.user_model.find_user_by_email(data['email'])
        if user:
            return jsonify({"message": "Email already registered!"}), 400

        # Create the hashed password
        hashed_password = generate_password_hash(data['password'])
        
        # Register the user as an admin (you can add extra checks here for admin-specific roles)
        new_user = self.user_model.register_user(data['name'], data['email'], hashed_password)
        
        # Set the user as an admin (you can adjust this logic if needed)
        self.user_model.set_admin(new_user['email'])
        
        return jsonify({"message": "Admin registered successfully!"}), 201
