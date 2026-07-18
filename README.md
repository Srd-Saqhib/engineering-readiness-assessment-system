# 🚀 Engineering Readiness Analyzer

An AI-powered full-stack web application that evaluates an engineering student's readiness for the software industry and recommends suitable career paths using Machine Learning.

---

## 📖 Overview

Engineering Readiness Analyzer helps students understand their current technical readiness based on academic performance, coding experience, projects, internships, hackathons, and self-learning habits.

The application predicts an **Engineering Readiness Score** using a Machine Learning model and recommends the most suitable engineering roles along with personalized learning resources.

---

## ✨ Features

- 🤖 Machine Learning based Engineering Readiness Prediction
- 📊 Engineering Readiness Score (0–100)
- 🎯 Personalized Career Role Recommendations
- 📚 Role-specific Learning Roadmaps
- 🎥 Curated YouTube Learning Resources
- 📖 Recommended Courses
- 💻 Practice Platforms
- 💡 Project Suggestions
- 🏢 Top Hiring Companies
- 💰 Salary Insights
- 📱 Responsive Modern UI
- ⚡ Smooth Animations using Framer Motion

---

## 🖼️ Screenshots

> Add screenshots inside a `screenshots/` folder.

### Home Page

```
screenshots/home.png
```

### Assessment Form

```
screenshots/form.png
```

### Prediction Result

```
screenshots/result.png
```

### Career Details

```
screenshots/details.png
```

---

## 🛠️ Tech Stack

### Frontend

- React.js
- CSS3
- Framer Motion
- React Icons
- Axios

### Backend

- Flask
- Flask-CORS

### Machine Learning

- Python
- Scikit-learn
- Pandas
- NumPy

### Development Tools

- VS Code
- Git
- GitHub

---

## 📂 Project Structure

```
Engineering-Readiness-Analyzer/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── app.py
│   ├── model.pkl
│   ├── role_data.json
│   ├── requirements.txt
│   └── dataset.csv
│
├── screenshots/
│
├── README.md
│
└── LICENSE
```

---

## ⚙️ Machine Learning Model

The application compares multiple regression models for predicting the Engineering Readiness Score.

Models evaluated:

- Linear Regression
- Decision Tree Regression
- Random Forest Regression ✅
- XGBoost Regression

### Final Model

Random Forest Regression

### Evaluation Metrics

| Metric | Value |
|---------|--------|
| R² Score | 0.593 |
| RMSE | 9.45 |
| MAE | 7.07 |

---

## 📊 Input Parameters

The prediction model uses the following features:

- CGPA
- Backlog History
- DSA Problems Solved
- GitHub Repositories
- Development Projects
- AI/ML Projects
- Internships Completed
- Hackathons Participated
- Self Learning Hours

---

## 🎯 Career Roles Supported

- Machine Learning Engineer
- AI Engineer
- Data Scientist
- Backend Developer
- Full Stack Developer
- Software Engineer
- Cloud Engineer
- DevOps Engineer
- Cybersecurity Analyst
- Mobile Application Developer

---

## 🚀 Installation

### Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/engineering-readiness-analyzer.git
```

---

### Frontend

```bash
cd frontend

npm install

npm run dev
```

---

### Backend

```bash
cd backend

pip install -r requirements.txt

python app.py
```

---

## 🌐 API Endpoints

### Predict Readiness

```
POST /predict
```

Returns

- Engineering Score
- Readiness Level
- Recommended Roles
- Improvement Suggestions

---

### Role Details

```
GET /role/<role_name>
```

Returns

- Overview
- Skills
- Roadmap
- Videos
- Courses
- Practice Platforms
- Project Ideas
- Companies
- Salary Information

---

## 📈 Workflow

```
Student Input
      │
      ▼
Data Validation
      │
      ▼
Machine Learning Model
(Random Forest Regression)
      │
      ▼
Engineering Readiness Score
      │
      ▼
Career Recommendation Engine
      │
      ▼
Role Details
      │
      ▼
Learning Roadmap
```

---

## 📌 Future Enhancements

- User Authentication
- Student Dashboard
- Profile History
- Resume Analysis
- AI Chat Assistant
- Interview Question Generator
- Skill Gap Analysis
- Course Progress Tracking
- Company-wise Placement Prediction
- Cloud Deployment

---

## 👨‍💻 Author

**Saqhib**

Computer Science Engineering Student

---

## 📜 License

This project is developed for educational and learning purposes.

---

## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.