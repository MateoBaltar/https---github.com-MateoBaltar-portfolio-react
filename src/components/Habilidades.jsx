
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Habilidades = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 }, { once: true });
  }, []);
  const skills = [
    {
      name: "HTML",
      img: "https://i.ibb.co/K0jHGxZ/HTML.webp",
    },
    {
      name: "CSS",
      img: "https://i.ibb.co/FhXzPYV/CSS.webp",
    },
    {
      name: "JavaScript",
      img: "https://i.ibb.co/S7Y0PGw/Java-Script.webp",
    },
    {
      name: "Java",
      img: "https://i.ibb.co/Lv02xZy/Java.webp",
    },
    {
      name: "Python",
      img: "https://i.ibb.co/vdsMbmT/Python.webp",
    },
    {
      name: "React",
      img: "https://i.ibb.co/nkRv1xH/React.webp",
    },
    {
      name: "Spring",
      img: "https://i.ibb.co/XZng5ZY/image-2023-05-07-160332634.webp",
    },
    {
      name: "MySQL",
      img: "https://i.ibb.co/GQxBHhp/image-2023-05-07-160338151.webp",
    },
  ];
  
  return (
    <div className="habilidades" id="habilidades">
      <h1 class="gradient-text" data-aos="fade-right">Habilidades</h1>
      <div className="row">
        {skills.map((skill) => {if (skill.name === "MySQL"){
          return (
            <div className="card" data-aos="flip-right">
              <img
                src={skill.img}
                alt={skill.name}
                style={{ width: "80%" }}
                className="img"
              />
              <h1 className="title">{skill.name}</h1>
            </div>
          );
        } else{
          return (
            <div className="card" data-aos="flip-right">
              <img src={skill.img} alt={skill.name} className="img" />
              <h1 className="title">{skill.name}</h1>
            </div>
          );
        }})}
      </div>
    </div>
  );
};

export default Habilidades;
