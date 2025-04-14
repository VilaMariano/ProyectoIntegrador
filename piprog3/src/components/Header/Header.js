import React from "react";
import Navbar from "../Navbar/Navbar";

const Header = (props) => {
    return (
        <header>
            <Navbar history={props.history} />
        </header>
    );
};

export default Header;