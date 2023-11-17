import { Link } from "react-router-dom";

const NavbarDesktop = () => {
    return (
        <nav className="nav-list">
            <div className="navItem">
                <Link to="/">Home</Link>
            </div>
            <div className="navItem">
                <Link to="/about">About</Link>
            </div>
            <div className="navItem">
                <Link to="/skills">Skills</Link>
            </div>
            <div className="navItem">
                <Link to="/resume">Resume</Link>
            </div>
            <div className="navItem">
                <Link to="https://jsmcreynolds.wordpress.com/">Blog</Link>
            </div> 
        </nav>
    )
}

export default NavbarDesktop;

