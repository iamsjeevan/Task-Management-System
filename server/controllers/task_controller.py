# controllers/task_controller.py

from flask import request, jsonify
from models.task_model import TaskModel
from models.notice_model import NoticeModel

class TaskController:
    def __init__(self, db):
        self.task_model = TaskModel(db)
        self.notice_model = NoticeModel(db)

    def create(self):
        data = request.get_json()
        task_data = self.task_model.create_task(data['title'], data['userEmail'], data['priority'], data['team'])
        for member in data['team']:
            self.notice_model.create_notice([member], f"New task '{data['title']}' assigned.", task_data['_id'], 'alert')
        return jsonify({"message": "Task created successfully!"}), 201

    def update(self, task_id):
        data = request.get_json()
        self.task_model.update_task(task_id, data)
        return jsonify({"message": "Task updated successfully!"}), 200

    def trash(self, task_id):
        self.task_model.trash_task(task_id)
        return jsonify({"message": "Task moved to trash!"}), 200
