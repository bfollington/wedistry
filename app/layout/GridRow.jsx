import React from "react";

import styles from "flexiblegs-css/flexiblegs-css.css";

export default class GridRow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    // Sizes format:

    /*

    {
        sm: "x/y"
        md: "x/y"
        lg: "x/y"
        xl: "x/y"
    }

    */

    render() {

        var classes = [];

        for (var size in this.props.sizes) {
            var ratio = this.props.sizes[size];

            var parts = ratio.split("/");

            if (parts.length !== 2) {
                console.warn("Layout ratio of", ratio, "is invalid");
                continue;
            }

            var numerator = parts[0];
            var denominator = parts[1];

            classes.push(`${size}-${numerator}-${denominator}`);
        }

        if (!this.props.children || this.props.children === undefined || this.props.children.length === 0) {
            return null;
        }

        var children = (this.props.children.length === undefined) ? [this.props.children] : this.props.children;

        return (
            <div className="wrap">
                { children.map( (child, i) => (
                    <div key={i} className={classes}>
                        { child }
                    </div>
                )) }
            </div>
        );
    }
}

GridRow.defaultProps = {
    sizes: {}
};
