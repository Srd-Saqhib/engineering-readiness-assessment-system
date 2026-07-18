import { FaTachometerAlt , FaCloud, FaShieldAlt, FaRobot, FaServer, FaChartLine } from "react-icons/fa";
import "../styles/orbit.css";

const INNER_NODES = [
    { icon: <FaRobot />, label: "AI / ML Engineer", angle: 0 },
    { icon: <FaServer />, label: "Backend Developer", angle: 120 },
    { icon: <FaCloud />, label: "Cloud Engineer", angle: 240 },
];

const OUTER_NODES = [
    { icon: <FaShieldAlt />, label: "Cybersecurity", angle: 40 },
    { icon: <FaChartLine />, label: "Data Engineer", angle: 200 },
];

function OrbitVisual() {
    return (
        <div className="orbit-visual" role="img" aria-label="Animated graph of career roles orbiting an AI analysis core">
            <div className="orbit-ring ring-outer" />
            <div className="orbit-ring ring-inner" />

            <div className="orbit-core">
                <FaTachometerAlt  />
            </div>

            <div className="orbit-track track-inner">
                {INNER_NODES.map((node, i) => (
                    <div
                        className="orbit-anchor anchor-inner"
                        style={{ "--a": `${node.angle}deg` }}
                        key={i}
                    >
                        <div className="orbit-counter counter-inner">
                            <div className="orbit-tilt" style={{ transform: `rotate(${-node.angle}deg)` }}>
                                <div className="orbit-node orbit-node--inner">
                                    <span className="orbit-node-icon">{node.icon}</span>
                                    <span className="orbit-node-label">{node.label}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="orbit-track track-outer">
                {OUTER_NODES.map((node, i) => (
                    <div
                        className="orbit-anchor anchor-outer"
                        style={{ "--a": `${node.angle}deg` }}
                        key={i}
                    >
                        <div className="orbit-counter counter-outer">
                            <div className="orbit-tilt" style={{ transform: `rotate(${-node.angle}deg)` }}>
                                <div className="orbit-node orbit-node--outer">
                                    <span className="orbit-node-icon">{node.icon}</span>
                                    <span className="orbit-node-label">{node.label}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="orbit-particles">
                {Array.from({ length: 10 }).map((_, i) => (
                    <span className={`particle p${i + 1}`} key={i} />
                ))}
            </div>
        </div>
    );
}

export default OrbitVisual;
