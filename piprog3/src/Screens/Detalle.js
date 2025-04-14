import React, { Component } from "react";

import DetallePelicula from "../components/DetallePelicula/DetallePelicula";

class Detalle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id
        };
    };

    render() {
        return (
            <DetallePelicula id={this.props.match.params.id} />
        );
    };

};

export default Detalle;