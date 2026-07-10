import React, { useState } from "react";
import axios from 'axios';
import ResultCard from "./ResultCard";
import RoleDetails from "./RoleDetails";
import "../styles/body.css"

function Body() {
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        cgpa: "",
        backlog_history: "",
        DSA_problems_solved: "",
        GitHub_repos: "",
        development_projects_count: "",
        AI_ML_projects: "",
        internships_completed: "",
        hackathons_participated: "",
        self_learning_hours: "",
    });
    const [result, setResult] = useState(null);
    const [roleDetails, setRoleDetails] = useState(null);

    async function fetchPrediction(e) {
        e.preventDefault();
        try {
            const res = await axios.post("http://127.0.0.1:5000/predict", formData);
            setFormData({
                cgpa: "",
                backlog_history: "",
                DSA_problems_solved: "",
                GitHub_repos: "",
                development_projects_count: "",
                AI_ML_projects: "",
                internships_completed: "",
                hackathons_participated: "",
                self_learning_hours: "",
            });
            setResult(res.data);
            setShowForm(false);
        }
        catch (error) {
            console.error(error);
        }
    }

    async function handleRoleClick(roleName) {
        try {
            const res = await axios.get(
                `http://localhost:5000/role/${encodeURIComponent(roleName)}`
            );

            setRoleDetails(res.data);

            setTimeout(() => {
                document
                    .getElementById("role-details")
                    ?.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
            }, 100);

        } catch (error) {
            console.error(error);
        }
    }

    console.log(roleDetails);
    return (
        <div>
            <h1 className="mark">
                {result ? "Assessment Results" : "Analyze Your Profile"}
            </h1>

            {!result && (
                <button
                    className="btn"
                    onClick={() => setShowForm(true)}
                    aria-label="Open profile analysis form"
                >
                    Analyze Profile
                </button>
            )}

            {result && (
                <>
                    <ResultCard
                        score={result.engineering_score}
                        level={result.level}
                        roles={result.roles}
                        suggestions={result.suggestions}
                        onRoleClick={handleRoleClick}
                    />

                    <button
                        className="analyse-btn"
                        onClick={() => {
                            setResult(null);
                            setFormData({
                                cgpa: "",
                                backlog_history: "",
                                DSA_problems_solved: "",
                                GitHub_repos: "",
                                development_projects_count: "",
                                AI_ML_projects: "",
                                internships_completed: "",
                                hackathons_participated: "",
                                self_learning_hours: "",
                            });
                            setShowForm(true);
                        }}
                        aria-label="Analyze another profile"
                    >
                        Analyze Another Profile
                    </button>
                </>
            )}

            {roleDetails && (
                <RoleDetails
                    role={roleDetails}
                />
            )}

            {showForm && (
                <div className="overlay" onClick={() => setShowForm(false)}>
                    <form
                        onSubmit={fetchPrediction}
                        className="prediction-form"
                        onClick={(e) => e.stopPropagation()}
                        aria-labelledby="form-title"
                    >
                        <div>
                            <h2 id="form-title">Engineering Profile</h2>
                            <div className="form-grid">
                                <div className="field">
                                    <label htmlFor="cgpa">CGPA</label>
                                    <input
                                        type="number"
                                        id="cgpa"
                                        name="cgpa"
                                        step="0.01"
                                        min="0"
                                        max="10"
                                        value={formData.cgpa}
                                        onChange={(e) =>
                                            setFormData({ ...formData, [e.target.name]: e.target.value })
                                        }
                                        required
                                        aria-required="true"
                                    />
                                </div>

                                <div className="field">
                                    <label htmlFor="backlog_history">Backlog History</label>
                                    <input
                                        type="number"
                                        id="backlog_history"
                                        name="backlog_history"
                                        min="0"
                                        value={formData.backlog_history}
                                        onChange={(e) =>
                                            setFormData({ ...formData, [e.target.name]: e.target.value })
                                        }
                                        required
                                        aria-required="true"
                                    />
                                </div>

                                <div className="field">
                                    <label htmlFor="DSA_problems_solved">DSA Problems Solved</label>
                                    <input
                                        type="number"
                                        id="DSA_problems_solved"
                                        name="DSA_problems_solved"
                                        min="0"
                                        value={formData.DSA_problems_solved}
                                        onChange={(e) =>
                                            setFormData({ ...formData, [e.target.name]: e.target.value })
                                        }
                                        required
                                        aria-required="true"
                                    />
                                </div>

                                <div className="field">
                                    <label htmlFor="GitHub_repos">GitHub Repositories</label>
                                    <input
                                        type="number"
                                        id="GitHub_repos"
                                        name="GitHub_repos"
                                        min="0"
                                        value={formData.GitHub_repos}
                                        onChange={(e) =>
                                            setFormData({ ...formData, [e.target.name]: e.target.value })
                                        }
                                        required
                                        aria-required="true"
                                    />
                                </div>

                                <div className="field">
                                    <label htmlFor="development_projects_count">
                                        Development Projects
                                    </label>
                                    <input
                                        type="number"
                                        id="development_projects_count"
                                        name="development_projects_count"
                                        min="0"
                                        value={formData.development_projects_count}
                                        onChange={(e) =>
                                            setFormData({ ...formData, [e.target.name]: e.target.value })
                                        }
                                        required
                                        aria-required="true"
                                    />
                                </div>

                                <div className="field">
                                    <label htmlFor="AI_ML_projects">AI/ML Projects</label>
                                    <input
                                        type="number"
                                        id="AI_ML_projects"
                                        name="AI_ML_projects"
                                        min="0"
                                        value={formData.AI_ML_projects}
                                        onChange={(e) =>
                                            setFormData({ ...formData, [e.target.name]: e.target.value })
                                        }
                                        required
                                        aria-required="true"
                                    />
                                </div>

                                <div className="field">
                                    <label htmlFor="internships_completed">
                                        Internships Completed
                                    </label>
                                    <input
                                        type="number"
                                        id="internships_completed"
                                        name="internships_completed"
                                        min="0"
                                        value={formData.internships_completed}
                                        onChange={(e) =>
                                            setFormData({ ...formData, [e.target.name]: e.target.value })
                                        }
                                        required
                                        aria-required="true"
                                    />
                                </div>

                                <div className="field">
                                    <label htmlFor="hackathons_participated">
                                        Hackathons Participated
                                    </label>
                                    <input
                                        type="number"
                                        id="hackathons_participated"
                                        name="hackathons_participated"
                                        min="0"
                                        value={formData.hackathons_participated}
                                        onChange={(e) =>
                                            setFormData({ ...formData, [e.target.name]: e.target.value })
                                        }
                                        required
                                        aria-required="true"
                                    />
                                </div>

                                <div className="field full-width">
                                    <label htmlFor="self_learning_hours">
                                        Self Learning Hours (per week)
                                    </label>
                                    <input
                                        type="number"
                                        id="self_learning_hours"
                                        name="self_learning_hours"
                                        min="0"
                                        value={formData.self_learning_hours}
                                        onChange={(e) =>
                                            setFormData({ ...formData, [e.target.name]: e.target.value })
                                        }
                                        required
                                        aria-required="true"
                                    />
                                </div>
                            </div>
                        </div>

                        <button type="submit">Analyze Profile</button>
                    </form>
                </div>
            )}
        </div>
    )
}

export default Body;