import React from "react";
import "./Footer.scss";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Painting</span>
          <span>Jewelry</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            obcaecati repudiandae laudantium labore explicabo. Dignissimos
            quaerat aspernatur magni corporis. Dolore eligendi magnam facilis
            voluptatem similique accusantium quod, a dolorum odio?
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            quos atque possimus nulla. Corporis laboriosam quaerat quas adipisci
            voluptatum inventore alias dicta tenetur ex sapiente quasi, aut
            itaque natus exercitationem.
          </span>
        </div>
      </div>
      <div className="contact-form">
        <form id="contact-form" method="post" action="contact-form-handler.php">
        <input name="name" type="name" class="form-control" placeholder="Your Name"
           required/><br></br>
          <input name="email" type="email" class="form-control" placeholder="Your Email"
           required/><br></br>
           <textarea name="message" class="form-control" placeholder="Message" row="4"
           required/><br></br>
           <input type="submit" class="form-control submit" value="SEND MESSAGE"/>
        </form>
      </div>
      <div className="bottom">
        <span className="logo">BBeshop</span>
        <span className="copyright">© Copyright 2023. All Rights Reserved</span>
      </div>
    </div>
  );
};

export default Footer;
