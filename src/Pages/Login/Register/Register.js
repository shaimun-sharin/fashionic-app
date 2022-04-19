import React from "react";
import { Button, Form } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../../Shared/Loading/Loading/Loading";
import Social from "../Social/Social/Social";
import register from "../../../images/register.jpg";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();
  const navigateLogin = () => {
    navigate("/login");
  };
  const [createUserWithEmailAndPassword, user, loading] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  if (loading) {
    return <Loading></Loading>;
  }
  if (user) {
    navigate("/home");
  }
  const handleRegister = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
    createUserWithEmailAndPassword(email, password);
  };
  return (
    <div className="register container">
      <div className="w-25">
        <img src={register} alt="" />
      </div>
      <div className="container w-100">
        <h3 className="text-success text-center m-2">
          Fill up the form below and Register !
        </h3>
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

          <Button variant="success" type="submit">
            Register
          </Button>
        </Form>
        <br />
        <Social></Social>
        <br />
        <h5 className="text-danger">
          Already have an account?
          <Link
            to="/login"
            className="text-success text-decoration-none pe-auto"
            onClick={navigateLogin}
          >
            Go To LogIn page!
          </Link>
        </h5>
      </div>
    </div>
  );
};

export default Register;
