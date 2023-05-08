from flask import Flask, make_response, request
from flask_migrate import Migrate
from models import db, Blogs

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///blogs.db'
app.config['SQLALCHEMY_TRACK_NODIFICATIONS'] = False

migrate = Migrate(app, db)
db.init_app(app)


@app.route('/')
def root_page():
    return make_response(
        'Welcome to my database', 200
    )

@app.route('/blogs')
def my_blogs():
    blog_list = [this.to_dict() for this in Blogs.query.all()]
    return make_response(
    blog_list,
    200
    )
    
if __name__ == "__main__":
    app.run(port = 5555, debug=True)
    
    
