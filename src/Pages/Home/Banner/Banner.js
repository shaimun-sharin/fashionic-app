import React from "react";
import { Carousel } from "react-bootstrap";
import one from "../../../images/1.jpg";
import two from "../../../images/2.jpg";
import three from "../../../images/3.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={one} alt="First slide" />
          <Carousel.Caption>
            <h3>It’s your time to shine</h3>
            <p>Where we love to exceed your expectations..</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={two} alt="Second slide" />

          <Carousel.Caption>
            <h3>Be who you want.</h3>
            <p>Unlock the beauty in you..</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={three} alt="Third slide" />

          <Carousel.Caption>
            <h3>Feel good about yourself</h3>
            <p>We care about you..</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
