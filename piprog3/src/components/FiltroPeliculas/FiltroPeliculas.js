import React, { Component } from "react";

class FiltroPeliculas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valorInput: "",
    };
  }

  manejarSubmit(evento) {
    evento.preventDefault();
  }

  controlarInput(evento) {
    this.setState(
      { valorInput: evento.target.value },
      () => this.props.filtrar(this.state.valorInput)
    );
  }

  render() {
    return (
      <form onSubmit={(evento) => this.manejarSubmit(evento)}>
        <input
          type="text"
          placeholder = "Buscar peliculas..."
          onChange={(evento) => this.controlarInput(evento)}
          />
        </form>
      );
    }
  }
  
  export default FiltroPeliculas;
  