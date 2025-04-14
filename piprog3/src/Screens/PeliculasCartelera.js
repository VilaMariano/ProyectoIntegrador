import React, { Component } from "react";
import FiltroPeliculas from "../components/FiltroPeliculas/FiltroPeliculas";
import Card from "../components/Card/Card";

class PeliculasCartelera extends Component {
    constructor() {
        super();
        this.state = {
            peliculas: [],
            backupPeliculas: [],
            page: 1,
        };
    }

    componentDidMount() {
        this.traerPeliculas();
    }

    traerPeliculas() {
        const apiKey = "7e01cd2a906c0519c41c822af50c74d9";

        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=${this.state.page}`)
            .then((res) => res.json())
            .then((data) =>
                this.setState((prevState) => ({
                    peliculas: prevState.peliculas.concat(data.results),
                    backupPeliculas: prevState.backupPeliculas.concat(data.results),
                }))
            )
            .catch((error) => console.log("Error al traer películas en cartelera:", error));
    }

    filtrarPeliculas = (texto) => {
        const pelisFiltradas = this.state.backupPeliculas.filter((peli) =>
            peli.title.toLowerCase().includes(texto.toLowerCase())
        );
        this.setState({ peliculas: pelisFiltradas });
    };

    cargarMas = () => {
        this.setState(
            (prevState) => ({ page: prevState.page + 1 }),
            () => this.traerPeliculas()
        );
    };

    render() {
        return (
            <main>
                <h2>Películas en Cartelera</h2>
                <FiltroPeliculas filtrar={this.filtrarPeliculas} />
                {this.state.peliculas.length === 0 ? (
                    <p>Cargando películas...</p>
                ) : (
                    <section>
                        {this.state.peliculas.map((peli) => (
                            <Card key={peli.id} pelicula={peli} />
                        ))}
                    </section>
                )}
                <button onClick={this.cargarMas}>Cargar más</button>
            </main>
        );
    }
}

export default PeliculasCartelera; 