import React, { useState, useEffect } from "react";
import axios from 'axios';
import ResultCard from "./ResultCard";
import RoleDetails from "./RoleDetails";
import OrbitVisual from "./OrbitVisual";
import "../styles/body.css"
import { FaLaptopCode, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const EMPTY_FORM = {
    cgpa: "",
    backlog_history: "",
    DSA_problems_solved: "",
    GitHub_repos: "",
    development_projects_count: "",
    AI_ML_projects: "",
    internships_completed: "",
    hackathons_participated: "",
    self_learning_hours: "",
};

const FORM_FIELDS = [
    { id: "cgpa", label: "CGPA", step: "0.01", min: "0", max: "10", full: false },
    { id: "backlog_history", label: "Backlog History", min: "0", full: false },
    { id: "DSA_problems_solved", label: "DSA Problems Solved", min: "0", full: false },
    { id: "GitHub_repos", label: "GitHub Repositories", min: "0", full: false },
    { id: "development_projects_count", label: "Development Projects", min: "0", full: false },
    { id: "AI_ML_projects", label: "AI / ML Projects", min: "0", full: false },
    { id: "internships_completed", label: "Internships Completed", min: "0", full: false },
    { id: "hackathons_participated", label: "Hackathons Participated", min: "0", full: false },
    { id: "self_learning_hours", label: "Self Learning Hours (per week)", min: "0", full: true },
];

const API_URL = import.meta.env.VITE_API_URL;

function Body() {
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState(EMPTY_FORM);
    const [result, setResult] = useState(null);
    const [roleDetails, setRoleDetails] = useState(null);

    useEffect(() => {
        if (roleDetails) {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    }, [roleDetails]);

    async function fetchPrediction(e) {
        e.preventDefault();
        try {
            const res = await axios.post(`${API_URL}/predict`, formData);
            setFormData(EMPTY_FORM);
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
                `${API_URL}/role/${encodeURIComponent(roleName)}`
            );

            setRoleDetails(res.data);

        } catch (error) {
            console.error(error);
        }
    }

    console.log(roleDetails);
    return (
        <div className="page">
            {!result && (
                <section className="hero-section">
                    <motion.div
                        className="hero-copy"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        <span className="hero-badge">
                            <span className="hero-badge-dot" />
                            AI Powered Career Guidance
                        </span>

                        <h1 className="hero-title">
                            Discover Your Ideal
                            <span className="hero-title-accent"> Engineering Path</span>
                        </h1>

                        <TypeAnimation
                            sequence={[
                                "Become a Machine Learning Engineer.", 2000,
                                "Build modern Backend Applications.", 2000,
                                "Master Cloud Computing.", 2000,
                                "Design intelligent AI Systems.", 2000,
                                "Protect systems as a Cybersecurity Analyst.", 2000,
                            ]}
                            wrapper="p"
                            speed={55}
                            repeat={Infinity}
                            className="hero-subtitle"
                        />

                        <p className="hero-description">
                            Answer a few questions about your academic record, projects,
                            and practice history. Our model scores your engineering
                            readiness and maps it to the roles you're closest to landing.
                        </p>

                        <motion.button
                            className="btn"
                            onClick={() => setShowForm(true)}
                            aria-label="Open profile analysis form"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            <FaLaptopCode /> Analyze Profile
                        </motion.button>
                    </motion.div>

                    <motion.div
                        className="hero-visual"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
                    >
                        <OrbitVisual />
                    </motion.div>
                </section>
            )}

            <AnimatePresence mode="wait">
                {result && !roleDetails && (
                    <motion.div
                        key="result"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                    >
                        <ResultCard
                            score={result.engineering_score}
                            level={result.level}
                            roles={result.roles}
                            suggestions={result.suggestions}
                            onRoleClick={handleRoleClick}
                        />

                        <motion.button
                            className="analyse-btn"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => {
                                setResult(null);
                                setFormData(EMPTY_FORM);
                                setShowForm(true);
                            }}
                            aria-label="Analyze another profile"
                        >
                            Analyze Another Profile
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence mode="wait">
                {roleDetails && (
                    <RoleDetails
                        role={roleDetails}
                        onBack={() => {
                            setRoleDetails(null);

                            window.scrollTo({
                                top: 0,
                                behavior: "smooth",
                            });
                        }}
                    />
                )}
            </AnimatePresence>

            <AnimatePresence>
                {showForm && (
                    <motion.div
                        className="overlay"
                        onClick={() => setShowForm(false)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                    >
                        <motion.form
                            onSubmit={fetchPrediction}
                            className="prediction-form"
                            onClick={(e) => e.stopPropagation()}
                            aria-labelledby="form-title"
                            initial={{ opacity: 0, scale: 0.94, y: 24 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.96, y: 16 }}
                            transition={{ duration: 0.35, ease: "easeOut" }}
                        >
                            <div>
                                <span className="form-eyebrow">Profile Assessment</span>
                                <h2 id="form-title">Engineering Profile</h2>
                                <p className="form-subtitle">
                                    A quick snapshot of where you stand today.
                                </p>

                                <div className="form-grid">
                                    {FORM_FIELDS.map((field) => (
                                        <div
                                            className={`field${field.full ? " full-width" : ""}`}
                                            key={field.id}
                                        >
                                            <input
                                                type="number"
                                                id={field.id}
                                                name={field.id}
                                                step={field.step}
                                                min={field.min}
                                                max={field.max}
                                                placeholder=" "
                                                value={formData[field.id]}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, [e.target.name]: e.target.value })
                                                }
                                                required
                                                aria-required="true"
                                            />
                                            <label htmlFor={field.id}>{field.label}</label>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <button type="submit">
                                Analyze Profile <FaArrowRight />
                            </button>
                        </motion.form>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Body;
