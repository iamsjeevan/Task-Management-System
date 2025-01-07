from pymongo import MongoClient
from werkzeug.security import generate_password_hash, check_password_hash

class UserModel:
    def __init__(self, db):
        self.db = db
        self.collection = db['users']

    def register_user(self, name, email, password, is_admin=False):
        user_data = {
            'name': name,
            'email': email,
            'password': password,
            'role': 'admin' if is_admin else 'user',  # Optional 'role' field
            'isAdmin': is_admin,  # Flag indicating admin status
        }
        self.collection.insert_one(user_data)
        return user_data


    def find_user_by_email(self, email):
        return self.collection.find_one({'email': email})

    def check_password(self, stored_password, provided_password):
        return check_password_hash(stored_password, provided_password)
