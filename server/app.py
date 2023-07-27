from flask import Flask, make_response, request, jsonify
from flask_migrate import Migrate
from models import db, Blogs
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///blogs.db'
app.config['SQLALCHEMY_TRACK_NODIFICATIONS'] = False

migrate = Migrate(app, db)
db.init_app(app)


@app.route('/')
def root_page():
    return make_response(
        'Welcome to my database', 200
    )

@app.route('/blogs', methods = ["GET", "POST"])
def my_blogs():
    if request.method == 'GET':
        blog_list = [this.to_dict() for this in Blogs.query.all()]
        return make_response(
        blog_list,
        200
        )
    if request.method == 'POST':
        form_data = request.get_json()
        title_data = form_data.get('title')
        image_data = form_data.get('image')
        text_data = form_data.get('text')
        new_blog = Blogs(
        title = title_data,
        image = image_data,
        text = text_data
        )
        db.session.add(new_blog)
        db.session.commit()
        return make_response(
        new_blog.to_dict()
        )
 
@app.route('/blogs/<int:id>', methods = ["GET", "DELETE"])
def blog_by_id(id):
    if request.method == 'GET':
        id_data = id
        blog_specific = Blogs.query.filter_by(id = id_data).first()
        return make_response(
        blog_specific.to_dict(),
        200
        )
    
    if request.method == 'DELETE':
        id_data = id
        blog_query = Blogs.query.filter_by(id = id_data).first()
        db.session.delete(blog_query)
        db.session.commit()
        return make_response(
        jsonify({f"Blog with title of {blog_query.title} and id of: {id_data}": "has been deleted"})
        )
    pass
        

    
    
    
    
    
if __name__ == "__main__":
    app.run(port = 5555, debug=True)
    
    
