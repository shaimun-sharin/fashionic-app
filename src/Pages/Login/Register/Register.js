import React from "react";
import { Button, Form } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Social from "../Social/Social/Social";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const navigate = useNavigate();
  const navigateLogin = () => {
    navigate("/login");
  };
  if (user) {
    navigate("/home");
  }
  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
    createUserWithEmailAndPassword(email, password);
  };
  return (
    <div className="container w-50 mx-auto b">
      <h4 className="text-info text-center">New User?</h4>
      <h5 className="text-danger text-center m-2">
        fill up the form below and Register !
      </h5>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Control type="text" name="name" placeholder="Enter name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <br />
      <Social></Social>
      <br />
      <p className="text-danger">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-success text-decoration-none pe-auto"
          onClick={navigateLogin}
        >
          Go To LogIn page!
        </Link>
      </p>
    </div>
  );
};

export default Register;
