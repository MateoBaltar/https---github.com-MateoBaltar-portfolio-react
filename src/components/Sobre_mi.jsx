import React, { useEffect } from "react";
import me from '../assets/me.webp';
import {Link} from "react-router-dom"
import Aos from "aos";
import "aos/dist/aos.css";
const Sobre_mi = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 }, { once: true });
  }, [])
  return (
    <div id="sobre_mi">
      <div class="sobre_mi">
        <h3 style={{ textAlign: "center" }}>
          <span class="gradient-text">Sobre mi</span>
        </h3>
        <p>
          Hola! Yo soy Mateo Baltar, soy una persona apasionada por aprender y
          expandirme en el area IT. Soy de Rio Grande, Tierra del Fuego,
          Argentina. Me gusta afrontar desafios de todo tipo y dejar que mi
          creatividad de fruto a nuevas ideas.
          <br />
          <br /> Fui parte del proyecto de Tecnologia + Trabajo, el cual me dio
          la oportunidad de cursar de manera gratuita el programa de Programador
          Full Stack desde agosto de 2022 hasta mayo de 2023
        </p>
        <Link to={"/curriculum"}>
          <button class="btn-hover boton">Curriculum</button>
        </Link>
      </div>
      <div data-aos="fade-right" data-aos-delay="500">
        <img src={me} alt="me" />
      </div>
    </div>
  );
};

export default Sobre_mi;
