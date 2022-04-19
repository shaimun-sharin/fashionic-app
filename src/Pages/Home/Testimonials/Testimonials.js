import React, { useEffect, useState } from "react";

import Testimonial from "../Testimonial/Testimonial";
import "./Testimonials.css";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch("testimonials.json")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);
  return (
    <div id="testimonials" className="testimonials">
      <h2 className="text-center">Customer Review:</h2>
      <div style={{ height: "1px" }} className="bg-dark w-25 mx-auto"></div>
      <div className="testimonial m-4 pb-2">
        {testimonials.map((testimonial) => (
          <Testimonial
            key={testimonial.id}
            testimonial={testimonial}
          ></Testimonial>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
