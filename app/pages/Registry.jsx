import React from "react";
import Item from "../Item";

export default class Registry extends React.Component {
    constructor(props) {
        super(props);
    }

    onClaim(id) {
        if (confirm("u sure?")) {
            console.log("ID", id);
            this.props.onClaimItem(id, this.props.user);
            console.log("OK", id);
        }
    }

    onUnclaim(id) {
        if (confirm("u sure?")) {
            console.log("ID", id);
            this.props.onUnclaimItem(id, this.props.user);
        }
    }

    render() {
        return (
            <div className="container">

                { this.props.items.map( item => <Item
                    key={this.props.items.indexOf(item)}
                    name={item.name}
                    image={item.image_url}
                    location={item.location}
                    locationUrl={item.location_url}
                    price={item.price}
                    description={item.description}
                    claimedBy={item.claimedBy}
                    currentUserOwns={item.claimedBy == this.props.user}
                    onClaim={this.onClaim.bind(this, this.props.items.indexOf(item))}
                    onUnclaim={this.onUnclaim.bind(this, this.props.items.indexOf(item))}
                /> ) }

            </div>
        );
    }
}
