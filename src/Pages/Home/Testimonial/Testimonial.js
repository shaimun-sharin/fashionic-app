import React from "react";
import { Card } from "react-bootstrap";

const Testimonial = ({ testimonial }) => {
  const { name, about, rating } = testimonial;
  return (
    <div className="mx-5">
      <Card border="dark" style={{ width: "18rem" }}>
        <Card.Header>{rating}</Card.Header>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{about}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Testimonial;
