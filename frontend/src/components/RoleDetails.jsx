import "../styles/roleDetails.css";
import { FaTools, FaRoute, FaYoutube, FaBookOpen, FaCode, FaProjectDiagram, FaBuilding, FaMoneyBillWave, FaArrowLeft, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const sectionMotion = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.45, ease: "easeOut" },
};

function RoleDetails({ role, onBack }) {
    if (role?.error) {
        return (
            <div className="role-details">
                <h2>Role Details</h2>
                <p>{role.error}</p>
            </div>
        );
    }

    return (
        <motion.div
            className="role-details"
            id="role-details"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
        >
            <button
                className="back-button"
                onClick={onBack}
            >
                <FaArrowLeft /> View Other Recommended Roles
            </button>

            <div className="role-header">
                <span className="role-eyebrow">Career Path</span>
                <h2>{role.role_name}</h2>
                <p className="role-description">
                    {role.overview}
                </p>
            </div>

            <motion.div className="role-section" {...sectionMotion}>
                <h3><FaTools /> Required Skills</h3>

                <div className="skills-container">
                    {role.required_skills.map((skill, index) => (
                        <span className="skill-chip" key={index}>
                            {skill}
                        </span>
                    ))}
                </div>
            </motion.div>

            <motion.div className="role-section" {...sectionMotion}>
                <h3><FaRoute /> Learning Roadmap</h3>

                <ol className="roadmap-list">
                    {role.roadmap.map((step, index) => (
                        <li key={index}>
                            <span className="roadmap-marker">{index + 1}</span>
                            <span className="roadmap-text">{step}</span>
                        </li>
                    ))}
                </ol>
            </motion.div>

            <motion.div className="role-section" {...sectionMotion}>
                <h3><FaYoutube color="var(--accent)" /> Recommended Videos</h3>

                <div className="video-grid">
                    {role.youtube_videos.map((video, index) => (
                        <a
                            key={index}
                            href={video.url}
                            target="_blank"
                            rel="noreferrer"
                            className="video-card"
                        >
                            <h4>{video.title}</h4>
                            <p>Watch on YouTube <FaExternalLinkAlt /></p>
                        </a>
                    ))}
                </div>
            </motion.div>

            <motion.div className="role-section" {...sectionMotion}>
                <h3><FaBookOpen /> Recommended Courses</h3>

                <div className="course-grid">
                    {role.courses.map((course, index) => (
                        <a
                            key={index}
                            href={course.url}
                            target="_blank"
                            rel="noreferrer"
                            className="course-card"
                        >
                            <h4>{course.name}</h4>

                            <p><strong>Provider:</strong> {course.provider}</p>

                            <span className="course-level">
                                {course.level}
                            </span>
                        </a>
                    ))}
                </div>
            </motion.div>

            <motion.div className="role-section" {...sectionMotion}>
                <h3><FaCode /> Practice Platforms</h3>

                <div className="platform-grid">
                    {role.practice_platforms.map((platform, index) => (
                        <a
                            key={index}
                            href={platform.url}
                            target="_blank"
                            rel="noreferrer"
                            className="platform-card"
                        >
                            <h4>{platform.name}</h4>
                            <p>Start Practicing <FaExternalLinkAlt /></p>
                        </a>
                    ))}
                </div>
            </motion.div>

            <motion.div className="role-section" {...sectionMotion}>
                <h3><FaProjectDiagram /> Project Ideas</h3>

                <div className="project-grid">
                    {role.project_ideas.map((project, index) => (
                        <div className="project-card" key={index}>

                            <span className={`project-level ${project.level.toLowerCase()}`}>
                                {project.level}
                            </span>

                            <h4>{project.title}</h4>

                        </div>
                    ))}
                </div>
            </motion.div>

            <motion.div className="role-section" {...sectionMotion}>
                <h3><FaBuilding /> Top Hiring Companies</h3>

                <div className="company-grid">
                    {role.companies.map((company, index) => (
                        <div className="company-card" key={index}>
                            {company}
                        </div>
                    ))}
                </div>
            </motion.div>

            <motion.div className="role-section" {...sectionMotion}>
                <h3><FaMoneyBillWave /> Salary Insights</h3>

                <div className="salary-grid">

                    <div className="salary-card">
                        <span className="salary-tag">Fresher</span>
                        <p>{role.salary.fresher}</p>
                    </div>

                    <div className="salary-card">
                        <span className="salary-tag">Experienced</span>
                        <p>{role.salary.experienced}</p>
                    </div>

                </div>
            </motion.div>

        </motion.div>
    );
}

export default RoleDetails;
