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
            <h1> Hi,I am Andria!</h1>
          </Card.Title>
          <Card.Text className="text-dark font-weight-bold">
            <h3>
              I’ve been a Stylist at Salon for the past five years and has over
              10 years of color and stylist experience. The wildest color I’ve
              ever dyed her hair was pastel blue and it was my favorite!🤩
            </h3>
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default Banner;
