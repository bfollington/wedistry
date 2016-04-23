import React from "react";
import classNames from "classnames";

export default class Password extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: undefined
        };
    }

    onChange(val) {

    }

    onSubmit(e) {
        e.preventDefault();

        this.setState({
            error: undefined
        });

        if (this.refs.password.value == this.props.password) {
            if (this.props.onSuccess) {
                this.props.onSuccess(this.refs.email.value);
            }
        } else {
            this.setState({
                error: "The password is not correct."
            });
        }
    }

    render() {

        var classes = classNames({
            "has-error": this.state.error,
            "form-group": true
        });

        return (
            <div className="container">
                <div className="row margin-top">
                    <div className="col-xs-10 col-xs-offset-1 box">
                        <form onSubmit={this.onSubmit.bind(this)}>

                            <div className="form-group">
                                <label>Your Email</label>
                                <input className="form-control" type="email" ref="email" required></input>
                                <p className="small-note">We'll use this to identify which gifts you've claimed.</p>
                            </div>
                            <div className={classes}>
                                <label className="control-label">Password</label>
                                { this.state.error ? <p className="error control-label">{this.state.error}</p> : null }
                                <input className="form-control" type="password" ref="password" onChange={this.onChange.bind(this)} required></input>
                                <p className="small-note">You should have received this in the mail with your invitation.</p>
                            </div>

                            <button type="submit" className="btn btn-primary">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
