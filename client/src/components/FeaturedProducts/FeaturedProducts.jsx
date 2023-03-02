import React, { useEffect } from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eql]=${type}`
  );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1 data-aos="fade-down">{type} products</h1>
        <p data-aos="fade-down">
          These products have been selected as the best, based on customer
          reviews. Be sure to stun them!
        </p>
      </div>
      <div className="bottom" data-aos="fade-up" data-aos-duration="1000">
        {error
          ? "Something went wrong!"
          : loading
          ? "loading"
          : data.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
