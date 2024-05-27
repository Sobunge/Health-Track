from flask import Blueprint, request, jsonify
from . import db
from .models import User, HealthData

main = Blueprint('main', __name__)

@main.route('/api/user', methods=['GET', 'POST'])
def handle_user():
    if request.method == 'POST':
        data = request.get_json()
        new_user = User(username=data['username'], email=data['email'], password_hash=data['password'])
        db.session.add(new_user)
        db.session.commit()
        return jsonify({'message': 'User created'}), 201
    else:
        users = User.query.all()
        return jsonify([user.username for user in users])

@main.route('/api/health', methods=['GET', 'POST'])
def handle_health():
    if request.method == 'POST':
        data = request.get_json()
        new_health_data = HealthData(
            user_id=data['user_id'], date=data['date'], exercise_type=data['exercise_type'],
            duration=data['duration'], calories_burned=data['calories_burned'], steps=data['steps']
        )
        db.session.add(new_health_data)
        db.session.commit()
        return jsonify({'message': 'Health data added'}), 201
    else:
        health_data = HealthData.query.all()
        return jsonify([{
            'user_id': data.user_id,
            'date': data.date,
            'exercise_type': data.exercise_type,
            'duration': data.duration,
            'calories_burned': data.calories_burned,
            'steps': data.steps
        } for data in health_data])
