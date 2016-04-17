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
        e.preventDefault();

        if (this.refs.password.value == this.props.password) {
            if (this.props.onSuccess) {
                this.props.onSuccess(this.refs.email.value);
            }
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <label>Your Email</label>
                    <input type="email" ref="email"></input>
                    <label>The Password</label>
                    <input type="text" ref="password" onChange={this.onChange.bind(this)}></input>

                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}
