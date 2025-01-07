from pymongo import MongoClient
from werkzeug.security import generate_password_hash, check_password_hash

class UserModel:
    def __init__(self, db):
        self.db = db
        self.collection = db['users']

    def register_user(self, name, email, password, is_admin=False):
        # Hash the password
        hashed_password = generate_password_hash(password)

        # User data, include the isAdmin flag here
        user_data = {
            'name': name,
            'email': email,
            'password': hashed_password,
            'role': 'admin' if is_admin else 'user',  # Set role based on isAdmin flag
            'isAdmin': is_admin,  # This field is now configurable during registration
        }

        # Insert the user into the database
        self.collection.insert_one(user_data)
        return user_data

    def find_user_by_email(self, email):
        return self.collection.find_one({'email': email})

    def check_password(self, stored_password, provided_password):
        return check_password_hash(stored_password, provided_password)

    # Method to set the isAdmin field to True for a specific user
    def set_admin(self, email):
        self.collection.update_one(
            {'email': email},
            {'$set': {'isAdmin': True}}
        )
