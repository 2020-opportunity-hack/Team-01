import React, {Component} from 'react';
import {Button, Navbar, NavbarDivider, NavbarGroup, NavbarHeading} from "@blueprintjs/core";
import {Redirect} from "react-router-dom";
import UserDatabase from "../UserDatabase";


export class Dashboard extends Component {
    constructor(props) {
        super(props);
        const token = localStorage.getItem("token")
        let loggedIn = true;
        if (!token) loggedIn = false;
        this.state = {
            loggedIn,
            type: "",

        };
        this.handleLogOut = this.handleLogOut.bind(this)
    }

    setSelectedMode(type) {
        this.setState({
            type: type
        })

    }

    handleLogOut() {
        localStorage.removeItem("token")
        this.setState({
            loggedIn: false
        })
    }

    getUI() {
        switch (this.state.type) {

            case "userData":
                return <UserDatabase/>;
            case "tokenTransfer":
                return;
            case "services":
                return;
        }
    }


    render() {
        if (!this.state.loggedIn) return <Redirect to="/admin"/>
        let backgroundColor = {backgroundColor: "#cac9c7"}
        return (
            <div>
                <Navbar>
                    <NavbarGroup>
                        <NavbarHeading>NPO</NavbarHeading>
                        <NavbarDivider/>
                        <Button text="User Database" icon="user" className="bp3-minimal"
                                onClick={this.setSelectedMode.bind(this, "userData")}
                                style={this.state.type === "userData" ? backgroundColor : null}/>
                        <Button text="Token Transfer" icon="exchange" className="bp3-minimal"
                                onClick={this.setSelectedMode.bind(this, "tokenTransfer")}
                                style={this.state.type === "tokenTransfer" ? backgroundColor : null}/>
                        <Button text="Some Cart" icon="box" className="bp3-minimal"
                                onClick={this.setSelectedMode.bind(this, "someCart")}
                                style={this.state.type === "someCart" ? backgroundColor : null}/>
                        <div style={{float:"right"}}>
                            <Button icon="user" text="Log Out" className="bp3-align-right"
                                    onClick={this.handleLogOut}
                                    style={{marginLeft: "5px"}}/></div>
                    </NavbarGroup>

                </Navbar>
                <div style={{marginTop: "1%"}}>{this.getUI()}</div>

            </div>

        )
    }
}

export default Dashboard;