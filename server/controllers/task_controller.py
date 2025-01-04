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
        
        # Debugging: Log the created task data
        print(f"Task created: {task_data}")
        
        for member in data['team']:
            self.notice_model.create_notice([member], f"New task '{data['title']}' assigned.", task_data['_id'], 'alert')
        
        return jsonify({"message": "Task created successfully!", "task id": str(task_data['_id'])}), 201

    def update(self, task_id):
        data = request.get_json()
        self.task_model.update_task(task_id, data)
        return jsonify({"message": "Task updated successfully!"}), 200

    def trash(self, task_id):
        self.task_model.trash_task(task_id)
        return jsonify({"message": "Task moved to trash!"}), 200

    def show_all(self):
        tasks = self.task_model.get_all_tasks()
        
        # Debugging: Log how many tasks are returned
        print(f"Returning {len(tasks)} tasks.")
        
        return jsonify({"tasks": tasks}), 200
