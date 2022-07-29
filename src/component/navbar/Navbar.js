import React from "react";
import "./NavbarStyle.css";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <li className="nav-link">
                <Link to="/">Home </Link>
            </li>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div
                className="collapse justify-content-center navbar-collapse"
                id="navbarNavDropdown"
            >
                <ul className="navbar-nav">
                    <li className="nav-item ">
                        <li className="nav-link">
                            <Link to="/galerie">Galerie </Link>
                        </li>
                    </li>
                    <li className="nav-item">
                        <li className="nav-link">
                            <Link to="/tarifs_et_prestations">
                                Tarifs et prestation{" "}
                            </Link>
                        </li>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/contact">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
