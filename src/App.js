import React from "react";
import "./App.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { FacebookLoginButton } from "react-social-login-buttons";

function App() {
  return (
    <form className="Login-form">
      <h1>
        <span className="font-weight-bold" style={{ color: "black",background:"DodgerBlue"  }}>
         My website.com
         
        </span>
      </h1>
      <h2 className="text-center" style={{ color: "GrayText" }}>
        Welcome
      </h2>
      <div className="text-center">
        <FormGroup>
          <div className="form"></div>
          <label style={{ color: "blue" }}>
            <h5>Email</h5>
          </label>
          <input type="email" placeholder="Email" />
        </FormGroup>
        <FormGroup>
          <label style={{ color: "blue" }}>
            <h5>password</h5>
          </label>

          <input type="password" placeholder="Password" />
        </FormGroup>
      </div>
      <div>
        <div style={{marginLeft:"40%"}}>
        <Button
          className="btn-lg btn-dark btn-block"
          style={{ width: "200px" }}
        >
          Lognin
        </Button>
</div>
        <div className="text-center" pt-3>
          {" "}
          <h6 style={{ color: "GrayText" }}>
            {" "}
            or continue with your social account
          </h6>
        </div>
        <div style={{ marginLeft: "40%" }}>
          <FacebookLoginButton
            className="mt-3 mb-3"
            style={{ width: "200px" }}
          />
        </div>
        <div className="text-center">
          <a href="/sign-up">Sign up </a>
          <span className="p-2">|</span>

           <a href="/forgot password">Forgot Password</a>
        </div>
      </div>
    </form>
  );
}

export default App;
