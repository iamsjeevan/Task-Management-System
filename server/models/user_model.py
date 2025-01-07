from werkzeug.security import generate_password_hash, check_password_hash

class UserModel:
    def __init__(self, db):
        self.db = db
        self.collection = db['users']

    def register_user(self, name, email, hashed_password, is_admin=False):
        # Prepare user data
        user_data = {
            'name': name,
            'email': email,
            'password': hashed_password,  # Use the hashed password
            'role': 'admin' if is_admin else 'user',  # Determine role
            'isAdmin': is_admin,  # Additional field for admin flag
        }

        # Insert the user into the database
        self.collection.insert_one(user_data)
        return user_data

    def find_user_by_email(self, email):
        return self.collection.find_one({'email': email})

    def check_password(self, stored_password, provided_password):
        # Compare the stored hashed password with the provided plaintext password
        return check_password_hash(stored_password, provided_password)
