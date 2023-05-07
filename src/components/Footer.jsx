import React from "react";
import { GrLinkedinOption } from "react-icons/gr";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";


const Footer = () => {
  return (
    <div className="margin-top">
      <div className="container">
        <div className="inner-container">
            <div className="left">
              <h3 className="subtitle-1">MB.</h3>
            </div>

            <div className="copyright">
              <h3 className="subtitle-5">
                © Copyright 2023. All right reserved
              </h3>
            </div>

            <div className="right">
              <a
                href="https://www.linkedin.com/in/mateo-baltar/"
                target="_blank"
                aria-label="Linkedin"
                rel="noreferrer"
              >
                <GrLinkedinOption />
              </a>

              <a
                href="https://github.com/MateoBaltar"
                target="_blank"
                aria-label="Github"
                rel="noreferrer"
              >
                <AiFillGithub />
              </a>

              <a
                aria-label="Mail"
                href="mailto:mateobaltar@gmail.com?subject=Contact us Form&cc=cc@example.com"
              >
                <AiOutlineMail />
              </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
