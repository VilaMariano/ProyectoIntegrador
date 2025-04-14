import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Screens/css/Home.css";
import Card from "../components/Card/Card";


class Home extends Component {
    constructor() {
        super();
        this.state = {
            populares: [],
            cartelera: [],
        };
    }

    componentDidMount() {
        const apiKey = "7e01cd2a906c0519c41c822af50c74d9";

        // pelis populares
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
            .then((response) => response.json())
            .then((data) => this.setState({ populares: data.results }))
            .catch((error) => console.log(error));

        // pelis en cartelera
        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`)
            .then((res) => res.json())
            .then((data) => this.setState({ cartelera: data.results }))
            .catch((error) => console.log(error));
    }

    render() {
        return (
            <main>
                <h2>Películas Populares</h2>
                <section>
                    {this.state.populares.length === 0 ? (
                        <h3>Cargando películas populares...</h3>
                    ) : (
                        this.state.populares
                            .filter((peli, idx) => idx < 5)
                            .map((peli) => (
                                <Card key={peli.id} pelicula={peli} />
                            ))
                    )}
                </section>
                <Link to="/populares" className="verTodasLink">Ver todas</Link>


                <h2>Películas en Cartelera</h2>
                  <section>
                    {this.state.cartelera.length === 0 ? (
                        <h3>Cargando películas en cartelera...</h3>
                    ) : (
                        this.state.cartelera
                            .filter((peli, idx) => idx < 5)
                            .map((peli) => (
                                <Card key={peli.id} pelicula={peli} />
                            ))
                    )}
                </section>
                <Link to="/recomendadas" className="verTodasLink">Ver todas</Link>

            </main>
        );
    }
}

export default Home;
