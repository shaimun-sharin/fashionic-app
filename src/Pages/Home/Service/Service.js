import React from "react";
import { Link } from "react-router-dom";

import "./Service.css";

const Service = ({ service }) => {
  const { name, price, img, about } = service;
  return (
    <div className="g-4 col-sm-12 col-md-6 col-lg-4 service">
      <div class="card" style={{ width: "18rem" }}>
        <img
          className="img rounded w-50 mx-auto "
          src={img}
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">{about}</p>
          <h4 class="card-text">Price:${price}</h4>

          <div>
            <Link to="/checkout">
              <button className="btn btn-info">Book Now!</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
