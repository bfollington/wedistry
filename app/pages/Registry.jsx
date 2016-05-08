import React from "react";
import Item from "../Item";

export default class Registry extends React.Component {
    constructor(props) {
        super(props);
    }

    onClaim(id) {
        if (confirm("Are you sure you want to claim this gift? This claim is to register your intention to buy this gift. You can’t buy it through our website, but you can call dibs!")) {
            console.log("ID", id);
            this.props.onClaimItem(id, this.props.user);
            console.log("OK", id);
        }
    }

    onUnclaim(id) {
        if (confirm("Are you sure you want to unclaim this gift? Someone else can claim it as soon as you back out.")) {
            console.log("ID", id);
            this.props.onUnclaimItem(id, this.props.user);
        }
    }

    render() {
        return (
            <div className="container">

                <div className="fancy-text justify-text">
                    <p>Thanks for checking out our website! As we start our new life in Bundaberg, we would love your support. If you would like to make a donation, we will have a wedding wishing-well on the Big Day or you can digitally donate at the bottom of this page. Otherwise, here’s a little list of gift ideas we wouldn't mind hauling to the Sugar City!</p>
                </div>

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

                <p className="align-center">
                    <a className="btn btn-primary" href="http://paypal.me/rickyandrobyn">Donate Online</a>
                </p>

            </div>
        );
    }
}
