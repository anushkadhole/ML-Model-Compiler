from flask import Flask
from app.routes.upload import upload_bp
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.register_blueprint(upload_bp)

if __name__ == '__main__':
    app.run(debug=True, port=5000)
