import React, { useEffect } from "react";
import arrow from "../assets/arrow.webp";
import Aos from "aos";
import "aos/dist/aos.css";
const ToTop = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    Aos.init({ duration: 2000 }, { once: true });
  }, []);

  return (
    <div className="ScrollToTop" data-aos="fade-up">
      <button onClick={handleScrollToTop}>
        <img src={arrow} alt="arrow" />
      </button>
    </div>
  );
};

export default ToTop;
