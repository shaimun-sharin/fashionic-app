import React from "react";
import { Card } from "react-bootstrap";
import banner from "../../../images/banner.jpg";

const Banner = () => {
  return (
    <div>
      <Card className="bg-dark text-white">
        <Card.Img className="w-100 h-100" src={banner} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title className=" font-weight-bold text-white">
            <h2>
              Hi,I am Andria! Welcome to you in my website. <br />
              <span>
                I’ve been a Stylist at Salon for the past five years and has
                over 10 years of color and stylist experience. The wildest color
                I’ve ever dyed her hair was pastel blue and it was my
                favorite!🤩
              </span>
            </h2>
          </Card.Title>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default Banner;
