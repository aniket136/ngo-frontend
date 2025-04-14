import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/egologo.png";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();

  return (
    <header>
      <div className="container-xl">
        <nav className="navbar navbar-expand-lg d-flex justify-content-between align-items-center py-3">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img src={logo} alt="EduChild Logo" width="45" className="me-2" id="ngo-logo" />
            <span className="fs-3 fw-bold">EduChild</span>
          </Link>

          {/* Mobile Toggle Button */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsNavOpen(!isNavOpen)}
            aria-controls="navbarNav"
            aria-expanded={isNavOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Links */}
          <div className={`navbar-collapse ${isNavOpen ? "show" : "collapse"} justify-content-center`} id="navbarNav">
            <ul className="navbar-nav fs-5 text-center text-lg-start">
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/programs">Programs</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/Donate">Donate</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Donate Button (Desktop only) */}
          <div className="d-none d-lg-block ms-3">
            <Link
              to="/Donate"
              className="btn px-4 py-2 fw-bold rounded-pill shadow-sm donate__btn text-white text-decoration-none"
            >
              Donate Now
            </Link>
          </div>
        </nav>

        {/* Donate Button (Mobile only) */}
        {isNavOpen && (
          <div className="text-center pb-3 d-lg-none">
            <Link
              to="/Donate"
              className="btn w-100 my-1 px-4 py-2 fw-bold rounded-pill donate__btn shadow-sm text-white text-decoration-none"
            >
              Donate Now
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
