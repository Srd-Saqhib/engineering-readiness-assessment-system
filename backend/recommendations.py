roles = {
    "Backend Developer": {
        "DSA_problems_solved": (500, 30),
        "GitHub_repos": (8, 20),
        "development_projects_count": (5, 25),
        "internships_completed": (1, 15),
        "cgpa": (7.5, 10)
    },

    "Full Stack Developer": {
        "GitHub_repos": (8, 25),
        "development_projects_count": (6, 30),
        "hackathons_participated": (2, 15),
        "self_learning_hours": (4, 15),
        "DSA_problems_solved": (300, 15)
    },

    "Machine Learning Engineer": {
        "AI_ML_projects": (3, 40),
        "DSA_problems_solved": (400, 20),
        "GitHub_repos": (5, 10),
        "self_learning_hours": (5, 15),
        "cgpa": (7.5, 15)
    },

    "AI Engineer": {
        "AI_ML_projects": (4, 40),
        "self_learning_hours": (5, 20),
        "DSA_problems_solved": (350, 15),
        "GitHub_repos": (5, 10),
        "development_projects_count": (5, 15)
    },

    "Data Scientist": {
        "AI_ML_projects": (3, 35),
        "cgpa": (8.0, 20),
        "self_learning_hours": (5, 20),
        "GitHub_repos": (5, 10),
        "internships_completed": (1, 15)
    },

    "Software Engineer": {
        "DSA_problems_solved": (500, 30),
        "development_projects_count": (5, 20),
        "GitHub_repos": (8, 20),
        "internships_completed": (1, 15),
        "cgpa": (7.0, 15)
    },

    "DevOps Engineer": {
        "GitHub_repos": (10, 30),
        "development_projects_count": (6, 25),
        "self_learning_hours": (5, 20),
        "internships_completed": (1, 15),
        "hackathons_participated": (2, 10)
    },

    "Cloud Engineer": {
        "GitHub_repos": (8, 20),
        "development_projects_count": (5, 25),
        "self_learning_hours": (4, 20),
        "internships_completed": (1, 20),
        "hackathons_participated": (2, 15)
    },

    "Cybersecurity Analyst": {
        "DSA_problems_solved": (400, 20),
        "GitHub_repos": (5, 20),
        "development_projects_count": (4, 20),
        "self_learning_hours": (5, 25),
        "cgpa": (7.0, 15)
    },

    "Mobile App Developer": {
        "development_projects_count": (6, 35),
        "GitHub_repos": (5, 20),
        "self_learning_hours": (4, 20),
        "hackathons_participated": (2, 15),
        "DSA_problems_solved": (300, 10)
    }
}


def role_recommendation(data):

    role_scores = {}

    for role, rules in roles.items():

        score = 0

        for feature, (minimum, points) in rules.items():

            if data[feature] >= minimum:
                score += points

        role_scores[role] = score

    sorted_roles = sorted(
        role_scores.items(),
        key=lambda x: x[1],
        reverse=True
    )

    return [
        {
            "role": role,
            "match": score
        }
        for role, score in sorted_roles[:4]
    ]

def improvement_suggestions(data):
    suggestions = []

    # CGPA
    if data["cgpa"] < 6:
        suggestions.append("Improve your CGPA above 6.5 to strengthen your academic profile.")
    elif data["cgpa"] < 7.5:
        suggestions.append("Aim for a CGPA above 7.5 to improve placement opportunities.")

    # Backlogs
    if data["backlog_history"] > 0:
        suggestions.append("Try to clear all existing backlogs as early as possible.")

    # DSA
    if data["DSA_problems_solved"] < 150:
        suggestions.append("Solve at least 200 DSA problems to build strong problem-solving skills.")
    elif data["DSA_problems_solved"] < 400:
        suggestions.append("Try reaching 500+ solved DSA problems.")

    # GitHub
    if data["GitHub_repos"] < 5:
        suggestions.append("Upload more projects to GitHub and maintain an active profile.")
    elif data["GitHub_repos"] < 10:
        suggestions.append("Contribute to open-source projects to strengthen your GitHub profile.")

    # Development Projects
    if data["development_projects_count"] < 3:
        suggestions.append("Build at least 3 complete development projects.")
    elif data["development_projects_count"] < 6:
        suggestions.append("Try building one advanced full-stack project.")

    # AI/ML Projects
    if data["AI_ML_projects"] == 0:
        suggestions.append("Build at least one AI/ML project to diversify your portfolio.")
    elif data["AI_ML_projects"] < 3:
        suggestions.append("Work on more intermediate or advanced AI/ML projects.")

    # Internships
    if data["internships_completed"] == 0:
        suggestions.append("Apply for internships to gain real industry experience.")
    elif data["internships_completed"] == 1:
        suggestions.append("Consider completing another internship to strengthen your resume.")

    # Hackathons
    if data["hackathons_participated"] == 0:
        suggestions.append("Participate in at least one hackathon to improve teamwork and problem-solving.")
    elif data["hackathons_participated"] < 3:
        suggestions.append("Join more hackathons to gain practical development experience.")

    # Self Learning
    if data["self_learning_hours"] < 3:
        suggestions.append("Increase self-learning to at least 5 hours per week.")
    elif data["self_learning_hours"] < 5:
        suggestions.append("Maintain a more consistent self-learning schedule.")

    # If profile is already strong
    if len(suggestions) == 0:
        suggestions.append(
            "Excellent profile! Continue learning consistently, contribute to open source, and keep building impactful projects."
        )

    return suggestions[:5]