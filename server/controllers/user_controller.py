from flask import request, jsonify
from werkzeug.security import generate_password_hash
from flask_jwt_extended import jwt_required,create_access_token,get_jwt_identity

class UserController:
    def __init__(self, db):
        from models.user_model import UserModel  # Avoid circular imports
        self.user_model = UserModel(db)

    def register(self):
        data = request.get_json()

        # Check if the user already exists
        user = self.user_model.find_user_by_email(data['email'])
        if user:
            return jsonify({"message": "Email already registered!"}), 400

        # Hash the password and register the user
        hashed_password = generate_password_hash(data['password'])
        new_user = self.user_model.register_user(data['name'], data['email'], hashed_password)
        return jsonify({"message": "User registered successfully!"}), 201

    def login(self):
        data = request.get_json()

        # Find user by email
        user = self.user_model.find_user_by_email(data['email'])
        if not user or not self.user_model.check_password(user['password'], data['password']):
            return jsonify({"message": "Invalid credentials!"}), 401

        # Create access token
        access_token = create_access_token(identity=user['email'])

        # Return token and user details
        return jsonify({
            'access_token': access_token,
            'email': user['email'],
            'name': user['name'],
            'role': user['role']
        }), 200

    def admin_register(self):
        data = request.get_json()

        # Check if the user already exists
        user = self.user_model.find_user_by_email(data['email'])
        if user:
            return jsonify({"message": "Email already registered!"}), 400

        # Hash the password and register the user as an admin
        hashed_password = generate_password_hash(data['password'])
        new_user = self.user_model.register_user(data['name'], data['email'], hashed_password, is_admin=True)

        return jsonify({"message": "Admin registered successfully!"}), 201
    @jwt_required()
    def get_user_details(self):
        email = get_jwt_identity()  # Get the email from the token
        user = self.user_model.find_user_by_email(email)
        
        if not user:
            return jsonify({"message": "User not found!"}), 404
        
        return jsonify({
            'name': user['name'],
            'email': user['email'],
            'role': user['role']
        }), 200