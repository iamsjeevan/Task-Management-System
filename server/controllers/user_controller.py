from flask import request, jsonify
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
    def admin_register(self):
        data = request.get_json()

        # Check if user already exists
        if self.user_model.find_user_by_email(data['email']):
            return jsonify({"message": "Email already registered!"}), 400

        # Register the new admin user
        hashed_password = generate_password_hash(data['password'])
        new_user = self.user_model.register_user(data['name'], data['email'], hashed_password, is_admin=True)

        return jsonify({"message": "Admin user registered successfully!"}), 201

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
            'email': user['email'],  # Assuming you have a 'username' field
            'name': user['name']  # Assuming you have a 'name' field
        }), 200
