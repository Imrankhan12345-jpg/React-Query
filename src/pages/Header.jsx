import { NavLink } from "react-router";
import "./Header.css";

const Header = () => {
    return (
        <header id="main-header" className="sticky-header">
            <nav id="nav-container">
                {/* Left Side: Brand Logo Circle & Name */}
                <div className="brand-logo-container">
                    <div className="logo-circle">N</div>
                    <span className="brand-name">Nexus</span>
                </div>

                {/* Right Side: Home NavLink */}
                <div className="nav-links-right">
                    <NavLink to={"/"} id="nav-home">Home</NavLink>
                </div>
            </nav>
        </header>
    );
}

export default Header;