from datetime import datetime, timedelta
from flask_jwt_extended import jwt_required, get_jwt_identity
from flask import request, jsonify
from models.task_model import TaskModel
from models.notice_model import NoticeModel

class TaskController:
    def __init__(self, db):
        self.task_model = TaskModel(db)
        self.notice_model = NoticeModel(db)

    @jwt_required()  # Ensure the user is logged in
    def create(self):
        data = request.get_json()

        # Get the user from the JWT identity (user email from the token)
        user_email = get_jwt_identity()  # Current logged-in user email
        user = self.user_model.find_user_by_email(user_email)
        
        # Check if the user is an admin or is creating the task for themselves
        if user['role'] != 'admin' and user_email != data['userEmail']:
            return jsonify({"message": "You are not authorized to assign tasks to others."}), 403
        
        # Add start_time and end_time for the task
        start_time = datetime.now()
        end_time = start_time + timedelta(days=7)  # Default end time, you can customize it
        
        # Call the task model to create the task
        task_data = self.task_model.create_task(
            data['title'],
            data['userEmail'],
            data['priority'],
            data['team'],
            data['notes'],
            data['status'],
            start_time,
            end_time
        )
        
        # Debugging: Log the created task data
        print(f"Task created: {task_data}")

        # Notify the team members
        for member in data['team']:
            self.notice_model.create_notice([member], f"New task '{data['title']}' assigned.", task_data['_id'], 'alert')

        return jsonify({"message": "Task created successfully!", "task id": str(task_data['_id'])}), 201

    @jwt_required()
    def update(self, task_id):
        data = request.get_json()
        self.task_model.update_task(task_id, data)
        return jsonify({"message": "Task updated successfully!"}), 200

    @jwt_required()
    def trash(self, task_id):
        self.task_model.trash_task(task_id)
        return jsonify({"message": "Task moved to trash!"}), 200

    @jwt_required()
    def show_all(self):
        tasks = self.task_model.get_all_tasks()
        
        # Debugging: Log the number of tasks fetched
        print(f"Returning {len(tasks)} tasks.")
        
        return jsonify({"tasks": tasks}), 200
