import React, { Component } from 'react';

import Card from "../components/Card/Card";

class Favoritos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favoritos: [],
            cargando: true,
        };
    }

    componentDidMount() {
        // traer la lista de favoritos del localStorage
        let favoritos = JSON.parse(localStorage.getItem("favoritos"));

        if (!favoritos) {
            favoritos = []; // si no existe la losta, se crea aca

        }

        const apiKey = "7e01cd2a906c0519c41c822af50c74d9";

        favoritos.map((id) => {
            fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
                .then((response) => response.json())
                .then((data) => {
                    this.setState({
                        favoritos: this.state.favoritos.concat(data),
                    })
                })
                .catch((error) => console.log(error));
        });

        this.setState({ cargando: false });
    };

    render() {
        return (
            <main>
                <h2>Favoritos</h2>
                {
                    this.state.cargando ?
                        <p>Cargando...</p> :
                        (
                            this.state.favoritos.length === 0 ?
                                <p>Todavía no hay favoritos</p> :
                                <section>
                                    {this.state.favoritos.map((peli, i) => (
                                        <Card key={peli.id} pelicula={peli} />
                                    ))}
                                </section>
                        )
                }
            </main>
        );
    }
};

export default Favoritos;
