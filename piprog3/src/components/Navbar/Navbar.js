import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <nav className="main-navbar">
                <div className="logo-container">
                    <img src="/img/logo.png" alt="Logo" className="logo" />
                    <Link to="/" className="logo-title-link">
                    <h1 className="logo-title">WatchIt!</h1>
                </Link>
                </div>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/cartelera">Cartelera</Link></li>
                    <li><Link to="/populares">Populares</Link></li>
                    <li><Link to="/favoritos">Favoritos</Link></li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;