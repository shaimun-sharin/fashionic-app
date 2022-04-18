import React from "react";
import google from "../../../../images/google.png";
import facebook from "../../../../images/facebook.png";
import github from "../../../../images/github.png";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

import { useNavigate } from "react-router-dom";
import auth from "../../../../firebase.init";

const Social = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  let errorElemnt;
  if (error) {
    errorElemnt = (
      <div>
        <p className="text-danger">Error: {error.message}</p>
      </div>
    );
  }
  if (user) {
    navigate("/home");
  }
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-secondary w-50"></div>
        <p className="mt-2 px-4 text-danger">OR</p>
        <div style={{ height: "1px" }} className="bg-secondary w-50"></div>
      </div>
      {errorElemnt}
      <div>
        <button
          onClick={() => signInWithGoogle()}
          className="btn w-50 px-2 d-block mx-auto bg-info"
        >
          <img src={google} alt="" /> Google Sign In
        </button>{" "}
        <br />
        <button className="btn w-50 px-2 d-block mx-auto bg-success">
          <img style={{ width: "20px" }} src={facebook} alt="" /> Facebook Sign
          In
        </button>{" "}
        <br />
        <button className="btn w-50 px-2 d-block mx-auto bg-secondary">
          <img src={github} alt="" /> Github Sign In
        </button>
      </div>
    </div>
  );
};

export default Social;
