import React from "react";
import { Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import checkout from "../../../images/checout.jpg";
import "./Checkout.css";

const CheckOut = () => {
  const { servicesId } = useParams();

  return (
    <div className="checkout">
      <div className="w-100 m-auto">
        <h3 className="text-center text-success">
          Selected service ID:{servicesId}
        </h3>
        <img className="w-75 m-auto" src={checkout} alt="" />
      </div>
      <div className=" conatiner w-75 m-auto">
        <h3 className="text-center text-success">CheckOut</h3>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Enter name" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Enter your address" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="number"
              placeholder="Enter your contact number"
            />
          </Form.Group>

          <Button variant="success" type="submit">
            Proceed
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default CheckOut;
