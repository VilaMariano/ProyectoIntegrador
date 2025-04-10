import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Card.css";

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mostrarDescripcion: false,
        };
    }

    verDescripcion = () => {
        this.setState({ mostrarDescripcion: !this.state.mostrarDescripcion });
    };

    render() {
        const { title, overview, poster_path, id } = this.props.pelicula;

        return (
            <>
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
                        <Link className="detalle-link" to={`/detalle/id/${id}`}>
                            Ver más información
                        </Link>
                        {/* <Favorito id={id} /> */}
                    </div>
                </article>
            </>
        );
    }
}


export default Card;
