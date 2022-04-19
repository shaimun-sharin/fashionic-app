import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="container">
      <div className="blog">
        <h4>Difference between authentication & authorization?</h4>
        <p>
          Authentication verifies who the user is but Authorization determines
          what resources a user can access. Authentication needs usually user’s
          login details and authorization needs user’s privilege or security
          levels
        </p>
      </div>
      <div className="blog">
        <h4>
          Why are you using firebase? What other options do you have to
          implement authentication?
        </h4>
        <p>
          Firebase Authentication gives back-end development services, automatic
          hooks to authenticate clients in application. There are also some
          other ways to authenticate a user. And they are Certificate-based
          authentication, voice recognition, Biometric
          authentication,Token-based authentication etc.
        </p>
      </div>
      <div className="blog">
        <h4>
          What other services does firebase provide other than authentication?
        </h4>
        <p>
          Other than authentication There are many services which Firebase
          provides :Cloud Functions,Hosting,Cloud Storage,Google Analytics,Cloud
          Messaging,Emulator suite, security rules etc.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
