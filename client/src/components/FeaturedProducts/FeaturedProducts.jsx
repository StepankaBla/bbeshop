import React, { useEffect } from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const FeaturedProducts = ({ type }) => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const data = [
    {
      id: 1,
      img: "/img/2.png",
      img2: "/img/2.1.png",
      title: "Far beyond the horizon",
      price: 450,
    },
    {
      id: 2,
      img: "/img/4.png",
      img2: "/img/4.1.png",
      title: "Flamingo attack",
      price: 850,
    },
    {
      id: 3,
      img: "/img/6.png",
      img2: "/img/6.1.png",
      title: "City view",
      price: 650,
    },
    {
      id: 4,
      img: "/img/8.png",
      img2: "/img/8.1.png",
      title: "Reflection in water",
      price: 750,
    },
  ];

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1 data-aos="fade-down">
          {type} Bestsellers
        </h1>
        <p data-aos="fade-down">
          These products have been selected as the best, based on customer
          reviews. Be sure to stun them!
        </p>
      </div>
      <div className="bottom" data-aos="fade-up" data-aos-duration="1000">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
