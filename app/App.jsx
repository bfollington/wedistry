import React from "react";
import styles from "./App.css";
import Rebase from "re-base";

import cuid from "cuid";
import clone from "./clone";

import classNames from "classnames";

import Password from "./pages/Password";
import Registry from "./pages/Registry";

const PASSWORD = "PASSWORD";
const APP = "APP";

import Firebase from "firebase";

var base = new Firebase("https://rickyandrobyn.firebaseio.com");
var items = base.child("items");
var password = base.child("password");

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            view: PASSWORD,
            user: null,
            password: null,
            items: []
        };
    }

    componentDidMount() {

        items.on('value', data => {
            this.setState({
                items: data.val()
            });
        });

        password.on('value', data => {
            this.setState({
                password: data.val()
            });
        });

    }

    onPasswordSuccess(email) {
        this.setState({
            view: APP,
            user: email
        })
    }

    render() {

        var views = {
            [PASSWORD]: <Password password={this.state.password} onSuccess={this.onPasswordSuccess.bind(this)} />,
            [APP]: <Registry items={Object.values(this.state.items)} user={this.state.user} />
        };

        return (
            <div>
                { views[this.state.view] }
            </div>
        );
    }
}
