import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { MdLocationOn } from "react-icons/md";
import { AiFillMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
const Contacto = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 }, { once: true });
  }, []);
  return (
    <div className="contacto" id="contacto">
      <div id="icons" data-aos="slide-right">
        <section>
          <div id="icon">
            <MdLocationOn />
          </div>

          <div>
            <h3 className="subtitle-4">
              Ciudad de Buenos Aires <br /> Argentina
            </h3>
          </div>
        </section>

        <section>
          <div id="icon">
            <AiFillMail />
          </div>

          <div>
            <h3 className="subtitle-4 email">
              mateobaltar<span>@gmail.com</span>
            </h3>
          </div>
        </section>

        <section>
          <div id="icon">
            <BsFillTelephoneFill />
          </div>

          <div>
            <h3 className="subtitle-4">2964659837</h3>
          </div>
        </section>
      </div>
      <div id="contact_form" data-aos="fade">
        <form
          action="https://formsubmit.co/mateobaltar@gmail.com"
          method="POST"
        >
          <input type="hidden" name="_subject" value="Contacto Portfolio!" />
          <input
            name="name"
            type="text"
            class="feedback-input"
            placeholder="Nombre"
          />
          <input
            name="email"
            type="text"
            class="feedback-input"
            placeholder="Email"
          />
          <textarea
            name="text"
            class="feedback-input"
            placeholder="Mensaje"
          ></textarea>
          <input type="submit" value="SUBMIT" />
        </form>
      </div>
    </div>
  );
};

export default Contacto;
