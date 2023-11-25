import { useState } from "react";
import { Link } from "react-router-dom";
import { Divide as Hamburger } from "hamburger-react";

const NavbarModile = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  let overlay = '';

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    
  }

return (
  <>
    <div className="nav-button" onClick={toggleMenu}>
      <Hamburger toggled={menuOpen} toggle={setMenuOpen} />
    </div>
    <div className={`overlay-div ${menuOpen ? "overlay" : null }`}  >
      <div className="nav-panel">
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
      </div>
    </div>
  </>
);
};

export default NavbarModile;
