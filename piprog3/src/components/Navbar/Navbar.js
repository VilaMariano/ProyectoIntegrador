import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="main-navbar">
            <div className="logo-container">
                <img src="/img/logo.png" alt="Logo" className="logo" />
                <h1 className="logo-title">WatchIt!</h1>
            </div>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/ver-todas">Ver todas</Link></li>
                <li><Link to="/favoritos">Favoritos</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;