import React, { useEffect } from "react";
import "./Contact.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);
  return (
    <div className="containerContacts">
      <div className="bannerProduct">
        <h2>Do you need any help?</h2>
        <span>contact us!</span>
      </div>
      <div className="imgContainer">
        <img data-aos="fade-right" src="/img/ig.png" alt="" className="phone"  />
        <div data-aos="fade-left" className="iconContainer">
          <div className="info">
            <img src="/img/git.png" alt="" />
            <span>StepankaBla</span>
          </div>
          <div className="info">
            <img src="/img/igLogo.png" alt="" />
            @bb__art
          </div>
          <div className="info">
            {" "}
            <img src="/img/gmail.avif" alt="" />
            bbeshop.art@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
