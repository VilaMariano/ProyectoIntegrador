import React, { Component } from "react";

import Card from "../Card/Card";

class Buscador extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: [],
            cargando: true
        };
    };

    componentDidMount() {
        
        const apiKey = "7e01cd2a906c0519c41c822af50c74d9";

        fetch(`https://api.themoviedb.org/3/search/movie?query=${this.props.query}&api_key=${apiKey}`)
            .then((response) => response.json())
            .then((data) => {
                this.setState({ peliculas: data.results });
                this.setState({ cargando: false });
            })
            .catch((error) => console.log(error));
    };

    render() {
        return (
            <main>
                <h2>Resultados de la búsqueda: {this.props.query}</h2>
                {
                    this.state.cargando ? 
                    <p>Cargando...</p> :
                    (
                        this.state.peliculas.length === 0 ? 
                        <p>No se encontraron resultados</p> :
                        <section>
                            <p>Se encontraron {this.state.peliculas.length} resultados</p>
                            {this.state.peliculas.map((peli, i) => (
                                <Card key={peli.id} pelicula={peli} />
                            ))}
                        </section>
                    )
                }
            </main>
        );
    };
};

export default Buscador;