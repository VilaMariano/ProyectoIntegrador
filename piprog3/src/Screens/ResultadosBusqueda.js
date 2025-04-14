import React, { Component } from "react";

import Buscador from "../components/Buscador/Buscador";

class ResultadosBusqueda extends Component {
    constructor(props) {
        super(props);
        this.state = {
            busqueda : this.props.location.state.query
        };
    };

    render() {
        return (
            <Buscador query={this.state.busqueda} />
        );
    };
};

export default ResultadosBusqueda;