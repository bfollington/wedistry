import React from "react";

export default class Password extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    onChange(val) {

    }

    onSubmit(e) {
        console.log("WOWOWOW");

        if (this.props.onSuccess) {
            this.props.onSuccess();
        }
    }

    render() {
        return (
            <div>
                <label>Password</label>
                <input type="text" ref="password" onChange={this.onChange.bind(this)}></input>
                <button onClick={this.onSubmit.bind(this)}>Submit</button>
            </div>
        );
    }
}
