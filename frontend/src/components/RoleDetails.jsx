import "../styles/roleDetails.css";

function RoleDetails({ role }) {
    if (role?.error) {
        return (
            <div className="role-details">
                <h2>Role Details</h2>
                <p>{role.error}</p>
            </div>
        );
    }

    return (
        <div id="role-details" className="role-details">

            <div className="role-header">
                <h2>{role.role_name}</h2>
                <p className="role-description">
                    {role.overview}
                </p>
            </div>

            <div className="role-section">
                <h3>Required Skills</h3>

                <div className="skills-container">
                    {role.required_skills.map((skill, index) => (
                        <span className="skill-chip" key={index}>
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

            <div className="role-section">
                <h3>Learning Roadmap</h3>

                <ol className="roadmap-list">
                    {role.roadmap.map((step, index) => (
                        <li key={index}>
                            {step}
                        </li>
                    ))}
                </ol>
            </div>

            <div className="role-section">
                <h3>Recommended Videos</h3>

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
                            <p>Watch on YouTube →</p>
                        </a>
                    ))}
                </div>
            </div>

            <div className="role-section">
                <h3>Recommended Courses</h3>

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
            </div>

            <div className="role-section">
                <h3>Practice Platforms</h3>

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
                            <p>Start Practicing →</p>
                        </a>
                    ))}
                </div>
            </div>

            <div className="role-section">
                <h3>Project Ideas</h3>

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
            </div>

            <div className="role-section">
                <h3>Top Hiring Companies</h3>

                <div className="company-grid">
                    {role.companies.map((company, index) => (
                        <div className="company-card" key={index}>
                            {company}
                        </div>
                    ))}
                </div>
            </div>

            <div className="role-section">
                <h3>Salary Insights</h3>

                <div className="salary-grid">

                    <div className="salary-card">
                        <h4>Fresher</h4>
                        <p>{role.salary.fresher}</p>
                    </div>

                    <div className="salary-card">
                        <h4>Experienced</h4>
                        <p>{role.salary.experienced}</p>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default RoleDetails;