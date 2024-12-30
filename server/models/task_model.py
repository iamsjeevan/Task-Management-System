# models/task_model.py

import datetime

class TaskModel:
    def __init__(self, db):
        self.db = db
        self.collection = db['tasks']

    def create_task(self, title, user_email, priority, team):
        task_data = {
            'title': title,
            'date': datetime.datetime.now(),
            'priority': priority,
            'stage': 'todo',
            'activities': [{
                'type': 'assigned',
                'activity': f"Task '{title}' has been assigned.",
                'by': user_email
            }],
            'team': team,
            'isTrashed': False,
        }
        task_id = self.collection.insert_one(task_data).inserted_id
        return task_data

    def get_all_tasks(self):
        return list(self.collection.find())
    
    def update_task(self, task_id, updates):
        self.collection.update_one({'_id': task_id}, {'$set': updates})

    def trash_task(self, task_id):
        self.collection.update_one({'_id': task_id}, {'$set': {'isTrashed': True}})
