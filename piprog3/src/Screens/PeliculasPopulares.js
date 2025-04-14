import React, { Component } from "react";
import FiltroPeliculas from "../components/FiltroPeliculas/FiltroPeliculas";

class PeliculasPopulares extends Component {
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

        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${this.state.page}`)
            .then((res) => res.json())
            .then((data) =>
                this.setState((prevState) => ({
                    peliculas: prevState.peliculas.concat(data.results),
                    backupPeliculas: prevState.backupPeliculas.concat(data.results),
                }))
            )
            .catch((error) => console.log("Error al traer películas:", error));
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
                <h2>Todas las Películas Populares</h2>
                <FiltroPeliculas filtrar={this.filtrarPeliculas} />
                {this.state.peliculas.length === 0 ? (
                    <p>Cargando películas...</p>
                ) : (
                    <section>
                        {this.state.peliculas.map((peli, i) => (
                            <article key={peli.id}>
                                <h3>{peli.title}</h3>
                                <img src={`https://image.tmdb.org/t/p/w200${peli.poster_path}`} alt={peli.title} />
                            </article>
                        ))}
                    </section>
                )}
                <button onClick={this.cargarMas}>Cargar más</button>
            </main>
        );
    }
}

export default PeliculasPopulares;
