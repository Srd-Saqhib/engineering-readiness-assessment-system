import joblib
import os

current_dir = os.path.dirname(__file__)
model_path = os.path.join(current_dir, "engineering_score_model.pkl")

model = joblib.load(model_path)

def predict_score(data):
    prediction  = model.predict(data)
    return prediction[0]