import React from "react";
import Header from "./components/Header/Header";
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
import Footer from "./components/Footer/Footer";
import Home from "./Screens/Home";
import PeliculasCartelera from "./Screens/PeliculasCartelera";
import PeliculasPopulares from "./Screens/PeliculasPopulares";
import Favoritos from "./Screens/Favoritos";
import NotFound from "./components/NotFound/NotFound";
import ResultadosBusqueda from "./Screens/ResultadosBusqueda";
import Detalle from "./Screens/Detalle";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/detalle/:id" component={Detalle} />
      <Route path="/cartelera" component={PeliculasCartelera}/> 
      <Route path="/populares" component={PeliculasPopulares} />
      <Route path="/favoritos" component={Favoritos}/> 
      <Route path="/busqueda" component={ResultadosBusqueda}/>
      <Route component={NotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
