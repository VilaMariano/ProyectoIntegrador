import React, { Component } from "react";

// AGREGAR CSS

class DetallePelicula extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pelicula: null,
            cargando: true,
            esFavorita: false
        };
    };

    componentDidMount() {
        const apiKey = "7e01cd2a906c0519c41c822af50c74d9";
        
        fetch(`https://api.themoviedb.org/3/movie/${this.props.id}?api_key=${apiKey}`)
            .then((response) => response.json())
            .then((data) => {
                this.setState({ pelicula: data });
                this.setState({ cargando: false });
            })
            .catch((error) => console.log(error));

        let favoritos = JSON.parse(localStorage.getItem("favoritos"));

        if (favoritos) {
            favoritos = favoritos.filter((id) => id == this.props.id);

            if (favoritos.length === 1) {
                this.setState({ esFavorita: true });
            }
            else {
                this.setState({ esFavorita: false });
            }
        }
    };

    agregarAFavoritos() {
        this.setState({ esFavorita : !this.state.esFavorita });


        // Traer la lista de favoritos del localStorage
        let favoritos = JSON.parse(localStorage.getItem("favoritos"));

        if (!favoritos) {
            // Si no existe la lista, crearla
            favoritos = [];
        }

        // Agregar a la lista favoritos el id de la película actual
        if (this.state.esFavorita) {
            // Si ya es favorita, quitarla
            favoritos = favoritos.filter((id) => id !== this.state.pelicula.id);
        } else {
            // Si no es favorita, agregarla
            favoritos.push(this.state.pelicula.id);
        };

        localStorage.setItem("favoritos", JSON.stringify(favoritos));

    };

    render() {
        return (
            <main>
                {
                    this.state.cargando ?
                    <p>Cargando...</p> :
                    <article>
                        <img src={`https://image.tmdb.org/t/p/original${this.state.pelicula.poster_path}`} alt={this.state.pelicula.title}/>
                        <h1>{this.state.pelicula.title}</h1>
                        <p>Calificación: {this.state.pelicula.rating}</p>
                        <p>Fecha de estreno: {this.state.pelicula.release_date}</p>
                        <p>Duración: {this.state.pelicula.runtime}</p>
                        <p>{this.state.pelicula.overview}</p>
                        <p>{this.state.pelicula.genres[0].name}</p>
                        <button onClick={() => this.agregarAFavoritos()}>
                            {
                                this.state.esFavorita ?
                                "Quitar de favoritos" :
                                "Agregar a favoritos"
                            }
                        </button>
                    </article>
                }
            </main>
        )
    };
};

export default DetallePelicula;