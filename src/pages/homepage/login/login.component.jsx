import React from "react";
import "./login.style.scss";
import SignIn from "../../../components/signin/signin.component";
import Signup from "../../../components/signup/signup.component";

const Login = () => {
  return (
    <div className="login">
      <SignIn />
      <Signup />
    </div>
  );
};

export default Login;
