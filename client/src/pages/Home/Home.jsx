import React, { useEffect } from "react";
import { HeroBanner } from "../../components/HeroBanner/HeroBanner";
import "./Home.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

export const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 100 });
  }, []);

  return (
    <div className="home">
      <HeroBanner />
      <div className="banner">
        <h2>Easy shopping!</h2>
        <span>guaranteed quality</span>
      </div>
      <div className="container" >
        <div className="container_img">
          <MDBCarousel showControls dealy={2000} dark showIndicators>
            <MDBCarouselItem
              className="w-100 d-block"
              itemId={2}
              src="/img/ic1.jpg"
              alt="..."
            >
              <p>1. Choose product</p>
            </MDBCarouselItem>

            <MDBCarouselItem
              className="w-100 d-block"
              itemId={2}
              src="/img/ic2.jpg"
              alt="..."
            >
              <p>2. Add to cart</p>
            </MDBCarouselItem>
            <MDBCarouselItem
              className="w-100 d-block"
              itemId={3}
              src="/img/ic3.jpg"
            >
              3. Pay
            </MDBCarouselItem>
            <MDBCarouselItem
              className="w-100 d-block"
              itemId={4}
              src="/img/ic4.jpg"
            >
              4. Pick up the package
            </MDBCarouselItem>
          </MDBCarousel>
        </div>
      </div>

      <FeaturedProducts />
    </div>
  );
};

export default Home;
