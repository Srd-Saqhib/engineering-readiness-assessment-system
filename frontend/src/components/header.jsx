import { motion } from "framer-motion";
import "../styles/header.css";

function Header() {
    return (
        <motion.header
            className="header"
            initial={{ y: -24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="header-inner">
                <div className="header-brand">
                    <span className="brand-mark" aria-hidden="true">
                        <span className="brand-dot" />
                    </span>
                    <span className="header-title">
                        Engineering Readiness Analyzer
                    </span>
                </div>

                <span className="header-tag">v2 · AI Career Insight</span>
            </div>
        </motion.header>
    );
}

export default Header;
