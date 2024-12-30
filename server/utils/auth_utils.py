# utils/auth_utils.py

from flask_jwt_extended import create_access_token

def generate_jwt(email):
    return create_access_token(identity=email)
