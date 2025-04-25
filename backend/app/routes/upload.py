from flask import Blueprint, request, jsonify
from app.utils.optimizer import optimize_model

upload_bp = Blueprint('upload', __name__)

@upload_bp.route('/api/upload', methods=['POST'])
def upload_model():
    file = request.files.get('model')
    target = request.form.get('target')
    result = optimize_model(file, target)
    return jsonify(result)
