import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import "./Login.css";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../../Shared/Loading/Loading/Loading";
import Social from "../Social/Social/Social";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import login from "../../../images/login.jpg";

const LogIn = () => {
  // variables
  const emailRef = useRef("");
  const passRef = useRef("");
  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  let errorElement;

  if (loading || sending) {
    return <Loading></Loading>;
  }
  if (user) {
    navigate(from, { replace: true });
  }
  if (error) {
    console.log(error.message);
    errorElement = <p className="text-danger">Error: {error.message}</p>;
  }
  //   signIn
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passRef.current.value;
    signInWithEmailAndPassword(email, password);
  };

  const navigateRegister = (event) => {
    navigate("/register");
  };
  const resetPassword = async () => {
    const email = emailRef.current.value;
    await sendPasswordResetEmail(email);
    toast("Sent email");
  };

  return (
    <div className="login container">
      <div className="w-100 mt-5">
        <img className="w-50" src={login} alt="" />
      </div>
      <div className=" w-100">
        <h3 className="text-primary text-center">
          Log In To enjoy seamlessly!
        </h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              required
              ref={emailRef}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              required
              ref={passRef}
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            LogIn
          </Button>
        </Form>
        <br />
        {errorElement}
        <br />
        <Social></Social>

        <br />
        <h6 className="text-danger">
          New to This Site?
          <Link
            to="/register"
            className="text-success text-decoration-none pe-auto"
            onClick={navigateRegister}
          >
            Please register!
          </Link>
        </h6>
        <p>
          Forget Password?
          <button
            className="btn btn-danger text-white pe-auto text-decoration-none"
            onClick={resetPassword}
          >
            Reset Password
          </button>
        </p>
        <ToastContainer />
      </div>
    </div>
  );
};

export default LogIn;
