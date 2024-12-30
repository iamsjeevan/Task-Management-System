# models/user_model.py

from pymongo import MongoClient
from werkzeug.security import generate_password_hash, check_password_hash

class UserModel:
    def __init__(self, db):
        self.db = db
        self.collection = db['users']

    def register_user(self, name, email, password):
        hashed_password = generate_password_hash(password)
        user_data = {
            'name': name,
            'email': email,
            'password': hashed_password,
            'role': 'user',
            'isAdmin': False,
        }
        self.collection.insert_one(user_data)
        return user_data

    def find_user_by_email(self, email):
        return self.collection.find_one({'email': email})

    def check_password(self, stored_password, provided_password):
        return check_password_hash(stored_password, provided_password)
