import React,{ useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Intro = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 }, {once: true});
  }, []);
  return (
    <div>
      <div>
        <div id="intro"></div>
        <div class="intro">
          <h1 data-aos="fade-right">
            Hola, mi nombre es <span id="yo">Mateo Baltar</span>
          </h1>
          <h4 data-aos="fade-in" data-aos-delay="1000"><strong>Desarrollador Full Stack</strong></h4>
          <a
            type="button"
            href="#contacto"
            class="btn btn-warning"
            id="boton"
            data-aos="fade-up"
          >
            Contacto
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
