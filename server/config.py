# config.py

import os

class Config:
    SECRET_KEY = os.getenv('SECRET_KEY', 'your_secret_key')  # Replace with your secret key
    MONGO_URI = os.getenv('MONGO_URI', 'mongodb://localhost:27017/task_management')
