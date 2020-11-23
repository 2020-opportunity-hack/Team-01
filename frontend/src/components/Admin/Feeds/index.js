import React, { Component } from "react";
import {
  Button,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
  Card,
  Elevation,
} from "@blueprintjs/core";

export class Feeds extends Component {
  render() {
    return (
      <div style={{ marginLeft: "1%", marginRight: "1%", marginTop: "1%" }}>
        <Card
          style={{ marginLeft: "1%", marginRight: "1%", marginTop: "1%" }}
          interactive={true}
          elevation={Elevation.TWO}
          className="bp3-minimal"
        >
          <h5>
            <a href="#">Client User: xyz@gmail.com deposited tokens 1000</a>
          </h5>
        </Card>
        <Card
          style={{ marginLeft: "1%", marginRight: "1%", marginTop: "1%" }}
          interactive={true}
          elevation={Elevation.TWO}
          className="bp3-minimal"
        >
          <h5>
            <a href="#">Client User: abc@gmail.com withdrew tokens 1000</a>
          </h5>
        </Card>
        <Card
          style={{ marginLeft: "1%", marginRight: "1%", marginTop: "1%" }}
          interactive={true}
          elevation={Elevation.TWO}
          className="bp3-minimal"
        >
          <h5>
            <a href="#">
              Admin User: admin@gmail.com added tokens 1000 to client
              xyz@gmail.com
            </a>
          </h5>
        </Card>
      </div>
    );
  }
}

export default Feeds;
