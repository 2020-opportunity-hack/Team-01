import React, { Component } from "react";
import { Card, Icon, Tooltip, Position, Overlay } from "@blueprintjs/core";
import ViewMoreDetails from "./ViewMoreDetails";
import axios from "axios";

export class UserDatabase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
      isOpenOverLay: false,
      idRequested: null,
    };
    this.toggleOverlay = this.toggleOverlay.bind(this);
  }

  toggleOverlay() {
    let { isOpenOverLay } = this.state;
    this.setState({
      isOpenOverLay: !isOpenOverLay,
    });
  }

  openViewMoreComponent(id) {
    this.setState({
      isOpenOverLay: true,
      idRequested: id,
    });
  }

  componentDidMount() {
    const token = localStorage.getItem("token");
    const AuthStr = "Bearer ".concat(token);
    axios
      .get("http://localhost:8080/admin/clients", {
        headers: { Authorization: AuthStr },
      })
      .then((response) => {
        this.setState({
          userData: response.data,
        });
      });
  }

  render() {
    let { userData } = this.state;
    return (
      <div>
        <Card style={{ width: "90%", marginLeft: "5%" }}>
          <h3>User Client's List</h3>
          <table
            className="bp3-html-table bp3-html-table-bordered  bp3-interactive"
            style={{ width: "100%" }}
          >
            <thead>
              <tr>
                <th>Email</th>
                <th>Full Name</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Token Balance</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((data, index) => (
                <tr id={index}>
                  <td>{data.email}</td>
                  <td>{data.name}</td>
                  <td>{data.first_name}</td>
                  <td>{data.last_name}</td>
                  <td>{data.token_balance}</td>
                  <td>
                    <Tooltip content="View Details" position={Position.RIGHT}>
                      <Icon
                        icon="eye-open"
                        iconSize={20}
                        onClick={this.openViewMoreComponent.bind(this, data.id)}
                      />
                    </Tooltip>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
        <Overlay isOpen={this.state.isOpenOverLay} onClose={this.toggleOverlay}>
          <Card style={{ width: "80%", marginLeft: "10%", marginTop: "10%" }}>
            <ViewMoreDetails id={this.state.idRequested} />
          </Card>
        </Overlay>
      </div>
    );
  }
}

export default UserDatabase;
