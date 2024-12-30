# controllers/notice_controller.py

from flask import jsonify
from models.notice_model import NoticeModel

class NoticeController:
    def __init__(self, db):
        self.notice_model = NoticeModel(db)

    def get_all_notices(self):
        notices = self.notice_model.collection.find()
        return jsonify([notice for notice in notices]), 200
