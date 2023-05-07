import curriculum from "../assets/curriculum.png";
import React from "react";
import { Link } from "react-router-dom";

const Curriculum = () => {
  return (
    <>
      <container id="curriculum">
        <div className="container">
          <div>
            <div className="btnContainer">
              <Link to={"/"}>
                <button className="btn-hover boton volver"> Volver </button>
              </Link>
              <button className="btn-hover boton">
                <a
                  href="/curriculum.pdf"
                  download="Mateo Baltar - Full Stack Developer"
                >
                  Descargar
                </a>
              </button>
            </div>

            <container id="resume">
              <img
                placeholder="blur"
                src={curriculum}
                layout="responsive"
                alt="Resume"
              />
            </container>
          </div>
        </div>
      </container>
    </>
  );
};

export default Curriculum;


