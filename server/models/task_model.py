from bson.objectid import ObjectId
import datetime

class TaskModel:
    def __init__(self, db):
        self.db = db
        self.collection = db['tasks']

    def create_task(self, project_name, user_email, priority, team):
        """
        Creates a new task and inserts it into the database.
        """
        task_data = {
            'project_name': project_name,  # Changed to snake_case for consistency
            'created_date': datetime.datetime.now(),
            'priority': priority,
            'stage': 'todo',  # Initial stage of the task
            'activities': [{
                'type': 'assigned',
                'activity': f"Task '{project_name}' has been assigned.",
                'by': user_email,
                'date': datetime.datetime.now()
            }],
            'team': team,
            'is_trashed': False,  # Trashed state for logical deletion
        }
        
        task_id = self.collection.insert_one(task_data).inserted_id
        task_data['_id'] = task_id  # Add ID to the returned data
        
        # Debugging: Log the inserted task data
        print(f"Task data inserted: {task_data}")
        
        return task_data

    def get_all_tasks(self, include_trashed=False):
        """
        Retrieves all tasks from the database.
        Filters out trashed tasks unless include_trashed is True.
        """
        query = {} if include_trashed else {'is_trashed': False}
        tasks = self.collection.find(query)
        
        # Debugging: Log the number of tasks fetched
        tasks_list = list(tasks)
        print(f"Fetched {len(tasks_list)} tasks from the database.")
        
        # Format tasks correctly
        formatted_tasks = [self._format_task(task) for task in tasks_list]
        return formatted_tasks

    def update_task(self, task_id, updates):
        """
        Updates the fields of a specific task by its ID.
        """
        try:
            result = self.collection.update_one(
                {'_id': ObjectId(task_id)},
                {'$set': updates}
            )
            return result.modified_count > 0
        except Exception as e:
            raise ValueError(f"Invalid task ID: {task_id}") from e

    def trash_task(self, task_id):
        """
        Marks a task as trashed by setting is_trashed to True.
        """
        try:
            result = self.collection.update_one(
                {'_id': ObjectId(task_id)},
                {'$set': {'is_trashed': True}}
            )
            return result.modified_count > 0
        except Exception as e:
            raise ValueError(f"Invalid task ID: {task_id}") from e

    def _format_task(self, task):
        """
        Formats a task for consistent output (e.g., converting ObjectId to string).
        """
        task['_id'] = str(task['_id'])  # Convert ObjectId to string
        return task
