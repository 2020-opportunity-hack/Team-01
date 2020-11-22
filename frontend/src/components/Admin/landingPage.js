import React, { Component } from "react";
import { Button, Card, Elevation } from "@blueprintjs/core";
import TextField from "@material-ui/core/TextField";
import { Redirect } from "react-router-dom";
import axios from "axios";

export class LandingPage extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("token");
    let loggedIn = true;
    if (!token) loggedIn = false;
    this.state = {
      loggedIn,
    };
    this.handleSignInForm = this.handleSignInForm.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
  }

  handleSignIn() {
    axios
      .post("http://localhost:8080/admin/token", {
        username: this.state.username,
        password: this.state.password,
      })
      .then((response) => {
        this.setState(
          {
            loggedIn: true,
          },
          function () {
            localStorage.setItem("token", response.data.token);
          }
        );
      });
  }

  handleSignInForm(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    if (this.state.loggedIn) {
      return <Redirect to="/adminDashboard" />;
    }
    return (
      <div>
        <Card
          elevation={Elevation.TWO}
          style={{ width: "50%", marginLeft: "25%", marginTop: "15%" }}
        >
          <h1>Sign In</h1>
          <h3>
            <a href="#">Please fill the form to Sign In</a>
          </h3>
          <div style={{ textAlign: "center" }}>
            <div>
              <TextField
                label="User Name"
                name="username"
                variant="outlined"
                style={{ width: "100%" }}
                onChange={this.handleSignInForm}
              />
            </div>
            <br />

            <div>
              <TextField
                label="Password"
                name="password"
                type="password"
                variant="outlined"
                style={{ width: "100%" }}
                onChange={this.handleSignInForm}
              />
            </div>
            <br />

            <Button intent="success" onClick={this.handleSignIn}>
              Sign In
            </Button>
          </div>
        </Card>
      </div>
    );
  }
}

export default LandingPage;
