import React from "react";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="text-center mt-4 bg-dark text-white">
      <h5> copyright © {year} </h5>
    </div>
  );
};

export default Footer;
