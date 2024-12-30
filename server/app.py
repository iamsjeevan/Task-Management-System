# app.py

from flask import Flask
from flask_jwt_extended import JWTManager
from flask_pymongo import PyMongo
from controllers.user_controller import UserController
from controllers.task_controller import TaskController
from controllers.notice_controller import NoticeController
from config import Config

app = Flask(__name__)
app.config.from_object(Config)
mongo = PyMongo(app)
jwt = JWTManager(app)

user_controller = UserController(mongo.db)
task_controller = TaskController(mongo.db)
notice_controller = NoticeController(mongo.db)

@app.route('/register', methods=['POST'])
def register():
    return user_controller.register()

@app.route('/login', methods=['POST'])
def login():
    return user_controller.login()

@app.route('/task', methods=['POST'])
def create_task():
    return task_controller.create()

@app.route('/task/<task_id>', methods=['PUT'])
def update_task(task_id):
    return task_controller.update(task_id)

@app.route('/task/<task_id>', methods=['DELETE'])
def trash_task(task_id):
    return task_controller.trash(task_id)

@app.route('/notices', methods=['GET'])
def get_notices():
    return notice_controller.get_all_notices()

if __name__ == '__main__':
    app.run(debug=True)
