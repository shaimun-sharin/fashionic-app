import React from "react";

import banner from "../../../images/banner.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <img width={1200} height={600} src={banner} alt="" />
    </div>
  );
};

export default Banner;
