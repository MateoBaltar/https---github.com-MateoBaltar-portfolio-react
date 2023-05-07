import React, { Component } from "react";
import Intro from "./Intro";
import Sobre_mi from "./Sobre_mi";
import Habilidades from "./Habilidades";
import Proyectos from "./Proyectos";
import Contacto from "./Contacto";
export default class Main extends Component {
  render() {
    return (
      <main>
        <Intro />
        <Sobre_mi />
        <Habilidades />
        <Proyectos />
        <Contacto />
      </main>
    );
  }
}
