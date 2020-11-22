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
    //apiCall
    const data = [
      {
        id: "1",
        name: "prashant",
        age: "18",
        gender: "male",
        tokenAvailable: "3000",
        tokenSpent: "500",
        tokenDeposit: "988",
        address:
          "abcdefadioasdiaj asdjaiodja adsiojdioajsdioajsjd asjjdiojasiodjas",
      },
      {
        id: "11",
        name: "sidharth jamuar",
        age: "18",
        gender: "male",
        tokenAvailable: "3000",
        tokenSpent: "500",
        tokenDeposit: "988",
        address:
          "abcdefadioasdiaj asdjaiodja adsiojdioajsdioajsjd asjjdiojasiodjas",
      },
      {
        id: "122",
        name: "rahul khanna",
        age: "18",
        gender: "male",
        tokenAvailable: "3000",
        tokenSpent: "500",
        tokenDeposit: "988",
        address:
          "abcdefadioasdiaj asdjaiodja adsiojdioajsdioajsjd asjjdiojasiodjas",
      },
      {
        id: "14",
        name: "ramesh sippy",
        age: "18",
        gender: "male",
        tokenAvailable: "3000",
        tokenSpent: "500",
        tokenDeposit: "988",
        address:
          "abcdefadioasdiaj asdjaiodja adsiojdioajsdioajsjd asjjdiojasiodjas",
      },
      {
        id: "51",
        name: "rakesh roshan",
        age: "18",
        gender: "male",
        tokenAvailable: "3000",
        tokenSpent: "500",
        tokenDeposit: "988",
        address:
          "abcdefadioasdiaj asdjaiodja adsiojdioajsdioajsjd asjjdiojasiodjas",
      },
      {
        id: "143",
        name: "ram mohan",
        age: "18",
        gender: "male",
        tokenAvailable: "3000",
        tokenSpent: "500",
        tokenDeposit: "988",
        address:
          "abcdefadioasdiaj asdjaiodja adsiojdioajsdioajsjd asjjdiojasiodjas",
      },
      {
        id: "941",
        name: "pushkar ojha",
        age: "18",
        gender: "male",
        tokenAvailable: "3000",
        tokenSpent: "500",
        tokenDeposit: "988",
        address:
          "abcdefadioasdiaj asdjaiodja adsiojdioajsdioajsjd asjjdiojasiodjas",
      },
      {
        id: "143",
        name: "chaman khanna",
        age: "18",
        gender: "male",
        tokenAvailable: "3000",
        tokenSpent: "500",
        tokenDeposit: "988",
        address:
          "abcdefadioasdiaj asdjaiodja adsiojdioajsdioajsjd asjjdiojasiodjas",
      },
      {
        id: "531",
        name: "chunky pandey",
        age: "18",
        gender: "male",
        tokenAvailable: "3000",
        tokenSpent: "500",
        tokenDeposit: "988",
        address:
          "abcdefadioasdiaj asdjaiodja adsiojdioajsdioajsjd asjjdiojasiodjas",
      },
      {
        id: "12",
        name: "ananya pandey",
        age: "18",
        gender: "female",
        tokenAvailable: "3000",
        tokenSpent: "500",
        tokenDeposit: "988",
        address:
          "abcdefadioasdiaj asdjaiodja adsiojdioajsdioajsjd asjjdiojasiodjas",
      },
    ];
  }

  render() {
    let { userData } = this.state;
    return (
      <div>
        <Card style={{ width: "90%", marginLeft: "5%" }}>
          <h3>User Database</h3>
          <table
            className="bp3-html-table bp3-html-table-bordered  bp3-interactive"
            style={{ width: "100%" }}
          >
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Token Available</th>
                <th>Token Spent</th>
                <th>Token Deposit</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((data, index) => (
                <tr id={index}>
                  <td>{data.first_name}</td>
                  <td>{data.last_name}</td>
                  <td>{data.name}</td>
                  <td>{data.tokenAvailable}</td>
                  <td>{data.tokenSpent}</td>
                  <td>{data.tokenDeposit}</td>
                  <td>{data.address}</td>
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
