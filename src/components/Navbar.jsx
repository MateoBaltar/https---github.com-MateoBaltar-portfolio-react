import React from "react";


const Navbar = () => {
  return (
    <nav
      class="navbar navbar-expand-lg navbar-dark"
      style={{ backgroundColor: "#181818" }}
    >
      <div class="navbar-brand">
        <span>MB.</span>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#intro">
              Inicio
            </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#sobre_mi">
              Sobre mi
            </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#habilidades">
              Habilidades
            </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#proyectos">
              Proyectos
            </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#contacto">
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar