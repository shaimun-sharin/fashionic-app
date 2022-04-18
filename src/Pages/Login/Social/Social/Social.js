import React from "react";
import google from "../../../../images/google.png";
import github from "../../../../images/github.png";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";

import { useNavigate } from "react-router-dom";
import auth from "../../../../firebase.init";

const Social = () => {
  const [signInWithGoogle, user, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, error1] = useSignInWithGithub(auth);
  const navigate = useNavigate();
  let errorElement;
  if (error || error1) {
    errorElement = (
      <p className="text-danger">
        Error: {error?.message}
        {error1?.message}
      </p>
    );
  }
  if (user || user1) {
    navigate("/home");
  }
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-secondary w-50"></div>
        <p className="mt-2 px-4 text-danger">OR</p>
        <div style={{ height: "1px" }} className="bg-secondary w-50"></div>
      </div>
      {errorElement}
      <div>
        <button
          onClick={() => signInWithGoogle()}
          className="btn w-50 px-2 d-block mx-auto bg-info"
        >
          <img src={google} alt="" /> Google Sign In
        </button>
        <br />
        <button
          onClick={() => signInWithGithub()}
          className="btn w-50 px-2 d-block mx-auto bg-secondary"
        >
          <img src={github} alt="" /> Github Sign In
        </button>
      </div>
    </div>
  );
};

export default Social;
