import EngineeringIcon from "@mui/icons-material/Engineering";
import "../styles/header.css";

function Header() {
    return (
        <header className="header">

            <div className="logo">
                <EngineeringIcon
                    sx={{
                        fontSize: 34,
                        color: "#111"
                    }}
                />
            </div>

            <div className="title">
                <h1>Engineering Readiness Analyzer</h1>
                <p>ML Based Career Assessment Platform</p>
            </div>

        </header>
    );
}

export default Header;