import React from "react";
import Header from "./components/Header/Header";
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import PeliculasPopulares from "./pages/PeliculasPopulares";
import NotFound from "./components/NotFound/NotFound";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/populares" component={PeliculasPopulares} />
      <Route component={NotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
