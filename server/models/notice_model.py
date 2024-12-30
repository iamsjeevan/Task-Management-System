# models/notice_model.py

class NoticeModel:
    def __init__(self, db):
        self.db = db
        self.collection = db['notices']

    def create_notice(self, team, text, task_id, noti_type):
        notice_data = {
            'team': team,
            'text': text,
            'task': task_id,
            'notiType': noti_type,
            'isRead': [],
        }
        self.collection.insert_one(notice_data)
