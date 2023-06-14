from http import server
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_serializer import SerializerMixin

db = SQLAlchemy()

class Blogs(db.Model, SerializerMixin):
    __tablename__ = 'blogs'
    
    id = db.Column(db.Integer, primary_key = True)
    title = db.Column(db.String)
    image = db.Column(db.String)
    text = db.Column(db.String)
    created_at = db.Column(db.DateTime, server_default = db.func.now())
    updated_at = db.Column(db.DateTime, onupdate = db.func.now())

