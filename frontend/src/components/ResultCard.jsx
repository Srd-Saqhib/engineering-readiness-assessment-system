import "../styles/resultCard.css";

function ResultCard({ score, level, roles, suggestions, onRoleClick }) {
    let color = "";

    if (level === "Excellent")
        color = "#22c55e";
    else if (level === "Good")
        color = "#3b82f6";
    else if (level === "Average")
        color = "#f59e0b";
    else
        color = "#ef4444";

    return (
        <div className="result-card">
            <h2>Assessment Results</h2>

            {/* Score Section - Left Side */}
            <div className="result-score-section">
                <div
                    className="score-circle"
                    style={{ borderColor: color }}
                >
                    {score.toFixed(1)}
                </div>

                <div className="score-info">
                    <h3 style={{ color }}>
                        {level}
                    </h3>
                    <p>Overall Engineering Readiness</p>
                    <div className="progress-bar">
                        <div
                            className="progress"
                            style={{
                                width: `${score}%`,
                                backgroundColor: color,
                            }}
                        ></div>
                    </div>
                    <p className="score-display">{score.toFixed(1)} / 100</p>
                </div>
            </div>

            {/* Roles & Suggestions - Right Side */}
            <div className="result-sections">
                <div className="result-section">
                    <h3>Recommended Roles</h3>
                    <ul>
                        {roles.map((role) => (
                            <li className="role-item" key={role.role} onClick={() => onRoleClick(role.role)}>
                                <span>{role.role}</span>
                                <strong>{role.match}% Match</strong>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="result-section">
                    <h3>Improvement Areas</h3>
                    <ul>
                        {suggestions.map((suggestion, index) => (
                            <li className="suggestion-item" key={index}>
                                {suggestion}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ResultCard;