import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="containerContacts">
      <div className="bannerProduct">
        <h2>Do you need any help?</h2>
        <span>contact us!</span>
      </div>
      <div className="imgContainer">
      <img src="/img/ig.png" alt="" className="respHero" />
      <div className="info">
        <img src="/img/git.png" alt=""  /><span>StepankaBla</span>
        </div>
        <div className="info"><img src="/img/igLogo.png" alt=""  />@bb__art</div>
        <div className="info"> <img src="/img/gmail.avif" alt=""  />bbeshop.art@gmail.com</div>
      
     
      </div>
      <div className="imgContainer2">
       
      </div>
    </div>
  );
};

export default Contact;
