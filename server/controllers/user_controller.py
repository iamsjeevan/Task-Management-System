# controllers/user_controller.py

from flask import request, jsonify
from flask_jwt_extended import create_access_token
from models.user_model import UserModel

class UserController:
    def __init__(self, db):
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
        access_token = create_access_token(identity=user['email'])
        return jsonify(access_token=access_token), 200
