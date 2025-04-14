import React from "react";
import "./NotFound.css"

const NotFound = () => {
    return (
        <div ClassName="NotFoundDiv">
            <h2 className="NotFound">404 Not Found</h2>
            <p>La página no existe.</p>
            <a href="/" className="NotFoundButton">Volver al inicio</a>
        </div>
    );
};

export default NotFound;