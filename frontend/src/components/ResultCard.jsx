import "../styles/resultCard.css";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const LEVEL_COLORS = {
    Excellent: "var(--level-excellent)",
    Good: "var(--level-good)",
    Average: "var(--level-average)",
};

function ResultCard({ score, level, roles, suggestions, onRoleClick }) {
    const color = LEVEL_COLORS[level] || "var(--level-low)";

    const radius = 84;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (Math.min(Math.max(score, 0), 100) / 100) * circumference;

    return (
        <motion.div
            className="result-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
        >
            <span className="result-eyebrow">Assessment Complete</span>
            <h2>Engineering Readiness Report</h2>

            {/* Score Section - Left Side */}
            <div className="result-score-section">
                <div className="score-gauge">
                    <svg viewBox="0 0 200 200" className="score-svg">
                        <circle
                            cx="100"
                            cy="100"
                            r={radius}
                            className="score-track"
                        />
                        <circle
                            cx="100"
                            cy="100"
                            r={radius}
                            className="score-progress"
                            style={{
                                stroke: color,
                                strokeDasharray: circumference,
                                strokeDashoffset: offset,
                            }}
                        />
                    </svg>
                    <div className="score-gauge-label">
                        <span className="score-number">{score.toFixed(1)}</span>
                        <span className="score-max">/ 100</span>
                    </div>
                </div>

                <div className="score-info">
                    <span className="score-level" style={{ color }}>
                        {level}
                    </span>
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
                </div>
            </div>

            {/* Roles & Suggestions - Right Side */}
            <div className="result-sections">
                <div className="result-section">
                    <h3>Recommended Roles</h3>
                    <ul>
                        {roles.map((role) => (
                            <motion.li
                                className="role-item"
                                key={role.role}
                                onClick={() => onRoleClick(role.role)}
                                whileHover={{ x: 6 }}
                            >
                                <div className="role-item-main">
                                    <span className="role-item-name">{role.role}</span>
                                    <div className="role-match-bar">
                                        <div
                                            className="role-match-fill"
                                            style={{ width: `${role.match}%` }}
                                        />
                                    </div>
                                </div>
                                <span className="role-match-value">{role.match}%</span>
                                <FaArrowRight className="role-item-arrow" />
                            </motion.li>
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
        </motion.div>
    );
}

export default ResultCard;
