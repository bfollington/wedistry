import React from "react";
import styles from "./App.css";
import Rebase from "re-base";

import cuid from "cuid";
import clone from "./clone";

import classNames from "classnames";

var base = Rebase.createClass("resplendent-torch-2458.firebaseio.com");

import Password from "./pages/Password";
import Registry from "./pages/Registry";

const PASSWORD = "PASSWORD";
const APP = "APP";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            view: PASSWORD
        };
    }

    componentDidMount() {

        // base.syncState(`trips/${this.state.journeyId}/journey`, {
        //     context: this,
        //     state: 'journey'
        // });
        //
        // base.syncState(`trips/${this.state.journeyId}/order`, {
        //     context: this,
        //     state: 'order',
        //     asArray: true
        // });

    }

    onPasswordSuccess(e) {
        this.setState({
            view: APP
        })
    }

    render() {

        var views = {
            [PASSWORD]: <Password onSuccess={this.onPasswordSuccess.bind(this)} />,
            [APP]: <Registry />
        };

        return (
            <div>
                { views[this.state.view] }
            </div>
        );
    }
}
