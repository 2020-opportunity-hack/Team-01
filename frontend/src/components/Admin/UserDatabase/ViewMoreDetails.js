import React, { Component } from "react";
import { Grid, Typography } from "@material-ui/core";
import { Button, Card, Collapse, Tag } from "@blueprintjs/core";
import Paper from "@material-ui/core/Paper";

class ViewMoreDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      moreDetails: null,
    };
  }

  componentDidMount() {
    //apiCall
    let { id } = this.state;
    let data = {
      family: [
        {
          name: "renu",
          relation: "sister",
          age: "22",
          tokenAvailable: "3000",
          tokenSpent: "500",
          tokenDeposit: "988",
        },
        {
          name: "manku",
          relation: "brother",
          age: "32",
          tokenAvailable: "3000",
          tokenSpent: "500",
          tokenDeposit: "988",
        },
        {
          name: "champak",
          relation: "father",
          age: "52",
          tokenAvailable: "3000",
          tokenSpent: "500",
          tokenDeposit: "988",
        },
      ],
      account: "isVerified",
      activity: "active",
      rating: "4",
      membersince: "2018",
    };
    this.setState(
      {
        moreDetails: data,
      },
      () => {
        console.log("state ho agaya");
      }
    );
  }

  handleFamilyCollapse = (index) => {
    let { moreDetails } = this.state;
    moreDetails.family[index].open = !moreDetails.family[index].open;
    this.setState({ moreDetails: moreDetails });
  };

  render() {
    const { moreDetails } = this.state;
    return (
      <div>
        {moreDetails ? (
          <Grid container direction="column" justify="center" spacing={4}>
            <Grid item>
              <h3 style={{ textAlign: "center", color: "#2057ff" }}>
                <u>Family Members</u>
              </h3>
              {moreDetails.family.map((members, index) => (
                <div>
                  <Button
                    onClick={this.handleFamilyCollapse.bind(this, index)}
                    rightIcon="expand-all"
                    text={members.name}
                    style={{ width: "75%", marginLeft: "12%" }}
                    id={index}
                  ></Button>
                  <Collapse isOpen={members.open}>
                    <Card
                      elevation={2}
                      style={{ width: "75%", marginLeft: "12%" }}
                    >
                      <Grid
                        container
                        direction="row"
                        justify="flex-start"
                        alignItems="flex-start"
                      >
                        <Grid item sm={6}>
                          <Typography>
                            <b>Name</b> &nbsp;:&nbsp;&nbsp;{members.name}
                          </Typography>
                        </Grid>
                        <Grid item sm={6}>
                          <Typography>
                            <b>Relation</b> &nbsp;:&nbsp;&nbsp;
                            {members.relation}
                          </Typography>
                        </Grid>
                        <Grid item sm={6}>
                          <Typography>
                            <b>Age</b> &nbsp;:&nbsp;&nbsp;{members.age}
                          </Typography>
                        </Grid>
                        <Grid item sm={6}>
                          <Typography>
                            <b>Tokens Available</b> &nbsp;:&nbsp;&nbsp;
                            {members.tokenAvailable}
                          </Typography>
                        </Grid>
                        <Grid item sm={6}>
                          <Typography>
                            <b>Token Spent</b> &nbsp;:&nbsp;&nbsp;
                            {members.tokenSpent}
                          </Typography>
                        </Grid>
                        <Grid item sm={6}>
                          <Typography>
                            <b>Token Deposit</b> &nbsp;:&nbsp;&nbsp;
                            {members.tokenDeposit}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Card>
                  </Collapse>
                </div>
              ))}
            </Grid>

            <Grid item>
              <h3 style={{ textAlign: "center", color: "#2057ff" }}>
                <u>General Information</u>
              </h3>
              <Paper>
                <Grid
                  container
                  direction="row"
                  justify="flex-start"
                  alignItems="flex-start"
                  style={{ width: "75%", marginLeft: "12%", padding: "10px" }}
                >
                  <Grid item sm={6}>
                    <Typography>
                      <b>Account Status</b> &nbsp;:&nbsp;&nbsp;
                      <Tag intent="success">{moreDetails.account}</Tag>
                    </Typography>
                  </Grid>
                  <Grid item sm={6}>
                    <Typography>
                      <b>Activity Status</b> &nbsp;:&nbsp;&nbsp;
                      <Tag intent="primary">{moreDetails.activity}</Tag>
                    </Typography>
                  </Grid>
                  <Grid item sm={6}>
                    <Typography>
                      <b>Rating</b> &nbsp;:&nbsp;&nbsp;
                      <Tag intent="warning">{moreDetails.rating} ☆</Tag>
                    </Typography>
                  </Grid>
                  <Grid item sm={6}>
                    <Typography>
                      <b>Member Since</b> &nbsp;:&nbsp;&nbsp;
                      {moreDetails.membersince}
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        ) : null}
      </div>
    );
  }
}

export default ViewMoreDetails;
