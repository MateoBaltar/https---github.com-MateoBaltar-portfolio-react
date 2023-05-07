import React, { Component } from "react";
import Intro from "./Intro";
import Sobre_mi from "./Sobre_mi";
import Habilidades from "./Habilidades";
import Proyectos from "./Proyectos";
import Contacto from "./Contacto";
import ToTop from "./ToTop";
export default class Main extends Component {
  render() {
    return (
      <main>
        <Intro />
        <ToTop />
        <Sobre_mi />
        <Habilidades />
        <Proyectos />
        <Contacto />
      </main>
    );
  }
}
