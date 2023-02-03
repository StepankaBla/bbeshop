import React from "react";
import "./About.scss";

const About = () => {
  return (
    <div className="about_container">
      <div className="contentContainer">
        <h1>How our art is being made?</h1>
        <div className="content_box">
          <div data-aos="fade-right" className="content_box_left">
            <img src="/img/drawing.jpg" alt="" />
          </div>
          <div data-aos="fade-left" className="content_box_right">
            <p>
              Painting pictures is the process of creating a{" "}
              <b>visual representation</b> using pigments (color) on a surface,
              typically canvas or paper. There are many different styles and
              techniques of painting, and artists can use a variety of mediums,
              including{" "}
              <b>oil paint, acrylic paint, watercolor, and gouache.</b>
            </p>
            <p>
              The final painting is the result of the artist's skill,
              creativity, and vision. It can be realistic or abstract,
              representational or non-representational, and can convey a wide
              range of emotions and ideas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
