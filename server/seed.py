from models import db, Blogs
from app import app
from faker import Faker


fake = Faker()

with app.app_context():
        Blogs.query.delete()
        titles = []
        for i in range(5):
            list_of_blogs = Blogs(
            title = fake.name(),
            image = fake.image_url(),
            text = fake.sentence()
            )
            titles.append(list_of_blogs)
        db.session.add_all(titles)
        db.session.commit()
        
    