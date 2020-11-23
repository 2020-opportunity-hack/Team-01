import React, { Component } from "react";
import "./Login.css";
import sffLogo from "../../img/SFF.png";
import { Button } from "@blueprintjs/core";
import axios from "axios";

import { GOOGLE_AUTH_URL, TEST_URL } from "../../common/constants";
var imgStyle = {
  width: "300px",
  height: "400px",
};

export class HomePageView extends Component {
  login() {
    console.log(GOOGLE_AUTH_URL);
    axios.get("http://localhost:8080/user/token").then((response) => {
      console.log(response.data);
    });
  }
  render() {
    return (
      <div className="login-container">
        <div className="login-content">
          <h1 className="login-title">Sunday Friends Foundation</h1>
          <img src={sffLogo} style={imgStyle}></img>
          <br />
          <div className="social-login">
            <a
              className="btn btn-block social-btn google"
              href={GOOGLE_AUTH_URL}
            >
              Log in with Google
            </a>
            {/* <br></br>
            <a className="btn btn-block social-btn google" href={TEST_URL}>
              Test
            </a>
            <br></br>
            <Button onClick={this.login}>Login</Button> */}
          </div>
        </div>
      </div>
    );
  }
}

export default HomePageView;
