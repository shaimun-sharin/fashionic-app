import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
// import SocialLogin from "../SocialLogin/SocialLogin";

const LogIn = () => {
  const emailRef = useRef("");
  const passRef = useRef("");
  const navigate = useNavigate();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  if (user) {
    navigate("/home");
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passRef.current.value;
    signInWithEmailAndPassword(email, password);
  };

  const navigateRegister = (event) => {
    navigate("/register");
  };

  return (
    <div className="container w-50 mx-auto">
      <h3 className="text-primary text-center">Please log in</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control ref={passRef} type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <br />
      {/* <SocialLogin></SocialLogin> */}
      <br />
      <p className="text-danger">
        New to Autorex?{" "}
        <Link
          to="/register"
          className="text-success text-decoration-none pe-auto"
          onClick={navigateRegister}
        >
          Please register!
        </Link>
      </p>
    </div>
  );
};

export default LogIn;
