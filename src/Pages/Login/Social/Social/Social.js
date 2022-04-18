import React from "react";
import google from "../../../../images/google.png";
import github from "../../../../images/github.png";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";

import { useNavigate } from "react-router-dom";
import auth from "../../../../firebase.init";
import Loading from "../../../../Shared/Loading/Loading/Loading";

const Social = () => {
  const [signInWithGoogle, user, error, loading] = useSignInWithGoogle(auth);
  const [signInWithGithub, userGit, errorGit, loadingGit] =
    useSignInWithGithub(auth);
  const navigate = useNavigate();
  if (loading || loadingGit) {
    return <Loading></Loading>;
  }

  if (user || userGit) {
    navigate("/home");
  }
  let errorElement;
  if (error || errorGit) {
    errorElement = (
      <p className="text-danger">
        Error: {error?.message}
        {errorGit?.message}
      </p>
    );
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
