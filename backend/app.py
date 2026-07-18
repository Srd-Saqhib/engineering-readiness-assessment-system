import json
import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from model.predict import predict_score
from recommendations import role_recommendation
from recommendations import improvement_suggestions

app = Flask(__name__)
CORS(app)

with open(
    os.path.join(os.path.dirname(__file__), "data", "role_data.json"),
    "r",
    encoding="utf-8"
) as file:
    role_data = json.load(file)

@app.route('/')
def index():
    return 'Hello world'

@app.route('/predict', methods=['POST'])
def prediction():
    features = request.get_json()
    
    features["cgpa"] = float(features["cgpa"])
    features["backlog_history"] = int(features["backlog_history"])
    features["DSA_problems_solved"] = int(features["DSA_problems_solved"])
    features["GitHub_repos"] = int(features["GitHub_repos"])
    features["development_projects_count"] = int(features["development_projects_count"])
    features["AI_ML_projects"] = int(features["AI_ML_projects"])
    features["internships_completed"] = int(features["internships_completed"])
    features["hackathons_participated"] = int(features["hackathons_participated"])
    features["self_learning_hours"] = float(features["self_learning_hours"])

    data = [[
        features["cgpa"],
        features["backlog_history"],
        features["DSA_problems_solved"],
        features["GitHub_repos"],
        features["development_projects_count"],
        features["AI_ML_projects"],
        features["internships_completed"],
        features["hackathons_participated"],
        features["self_learning_hours"]
    ]]

    predicted = predict_score(data)
    roles=role_recommendation(features)
    suggestions=improvement_suggestions(features)

    if predicted >= 80:
        level = "Excellent"
    elif predicted >= 60:
        level = "Good"
    elif predicted >= 40:
        level = "Average"
    else:   
        level = "Needs Improvement"    

    return jsonify({ "engineering_score":predicted, "roles":roles, "suggestions":suggestions, "level":level })

@app.route('/role/<role_name>', methods=['GET'])
def get_role_details(role_name):
    role_info = role_data.get(role_name)

    if role_info:
        role_details = dict(role_info)
        role_details["role_name"] = role_name
        return jsonify(role_details)

    return jsonify({"error": "Role not found"}), 404

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8080))
    app.run(host="0.0.0.0", port=port)
