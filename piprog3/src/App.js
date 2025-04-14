import React from "react";
import Header from "./components/Header/Header";
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
import Footer from "./components/Footer/Footer";
import Home from "./Screens/Home";
import PeliculasPopulares from "./Screens/PeliculasPopulares";
import NotFound from "./components/NotFound/NotFound";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/detalle/:id" />
      <Route path="/cartelera" />
      <Route path="/populares" component={PeliculasPopulares} />
      <Route path="/favoritas" />
      <Route path="/busqueda" />
      <Route component={NotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
