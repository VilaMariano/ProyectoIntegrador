import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Card.css";

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mostrarDescripcion: false,
            esFavorita: false
        };
    }

    componentDidMount() {
        let favoritos = JSON.parse(localStorage.getItem("favoritos"));

        if (favoritos) {
            favoritos = favoritos.filter((id) => id == this.props.pelicula.id);

            if (favoritos.length === 1) {
                this.setState({ esFavorita: true });
            }
            else {
                this.setState({ esFavorita: false });
            }
        }
    };

    agregarAFavoritos() {
        this.setState({ esFavorita: !this.state.esFavorita });


        // traer la lista de favs del localStorage
        let favoritos = JSON.parse(localStorage.getItem("favoritos"));

        if (!favoritos) {
            // s no existe la lista, crearla
            favoritos = [];
        }

        // agregar a la lista de favs el id de la pelicula actual
        if (this.state.esFavorita) {
            // si ya es favorita, quitarla
            favoritos = favoritos.filter((id) => id !== this.props.pelicula.id);
        } else {
            // si no es favorita, agregarla
            favoritos.push(this.props.pelicula.id);
        };

        localStorage.setItem("favoritos", JSON.stringify(favoritos));

    };

    verDescripcion = () => {
        this.setState({ mostrarDescripcion: !this.state.mostrarDescripcion });
    };

    render() {
        const { title, overview, poster_path, id } = this.props.pelicula;

        return (
            <article className='character-card'>
                <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={title} />
                <h3>{title}</h3>
                <button className="more" onClick={this.verDescripcion}>
                    {this.state.mostrarDescripcion ? "Ocultar sinopsis" : "Ver sinopsis"}
                </button>
                {this.state.mostrarDescripcion && (
                    <section className="extra">
                        <p>Descripción: {overview}</p>
                    </section>
                )}

                <div className="button-container">
                    <Link className="detalle-link" to={`/detalle/${id}`}>
                        Ver más información
                    </Link>
                    <button onClick={() => this.agregarAFavoritos()}>
                        {
                            this.state.esFavorita ?
                                "Quitar de favoritos" :
                                "Agregar a favoritos"
                        }
                    </button>
                </div>
            </article>
        );
    }
}


export default Card;
