import React,{ useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Proyectos = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 }, { once: true });
  }, []);
  const proyectos = [
    {
      title: "CipherTools",
      description: "Codificador/Decodificador de Algoritmos de Cifrado",
      img: "https://i.ibb.co/ngnMPbM/image-2023-05-07-190020876.webp",
      liveDemoLink: "https://cipher-tools.vercel.app",
      isCodeAvailable: true,
      codeLink: "https://github.com/MateoBaltar/CipherTools",
      tools: ["React", "Javascript", "API", "Vercel"],
    },
    {
      title: "CompraTech",
      description: "E-Commerce de Tecnologia",
      img: "https://i.ibb.co/zZTHfqC/image-2023-05-07-190013662.webp",
      liveDemoLink: "https://compra-tech-ecommerce.vercel.app",
      isCodeAvailable: true,
      codeLink: "https://github.com/MateoBaltar/CompraTech_Ecommerce",
      tools: ["React", "Javascript", "Sanity", "Vercel"],
    },
  ];
  return (
    <div className="proyectos" id="proyectos">
      <h1 class="gradient-text" data-aos="slide-up">
        Proyectos
      </h1>
      <div className="row-proyectos" data-aos="fade-up"  >
        {proyectos.map((proyecto) => {
          return (
            <div className="card-proyectos">
              <img src={proyecto.img} alt={proyecto.title} />
              <div className="tools">
                {proyecto.tools.map((tool) => (
                  <h6 className="smallText-3 tool" key={tool}>
                    <span> {tool}</span>
                  </h6>
                ))}
              </div>
              <div className="card-header">
                <h2 className="card-title">{proyecto.title}</h2>
              </div>
              <div className="card-content">{proyecto.description}</div>
              <div className="card-footer">
                <button className="btn-hover boton proyecto">Live Demo</button>
                <button className="btn-hover boton proyecto">Code</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Proyectos;
