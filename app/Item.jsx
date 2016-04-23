import React from "react";

var Item = (props) => {

    var claimSection = <button type="button" onClick={props.onClaim} className="btn btn-primary claim-button">Claim Gift</button>;
    if (props.claimedBy && props.currentUserOwns) {
        claimSection = <button type="button" onClick={props.onUnclaim} className="btn btn-danger claim-button">Unclaim Gift</button>;
    } else if (props.claimedBy) {
        claimSection = <button type="button" disabled className="btn btn-primary claim-button">Gift Claimed</button>;
    }

    return (
        <div className="row margin-top">
            <div className="col-xs-10 col-xs-offset-1 box">

                <div className="col-xs-2">
                    <img className="item-image" src={props.image} />
                </div>
                <div className="col-xs-10">
                    <div className="row margin-bottom">
                        <div className="col-xs-6">
                            {props.name}
                        </div>
                        <div className="col-xs-6 align-right">
                            ${props.price}
                        </div>
                    </div>

                    <p>Available: <a target="_blank" href={props.locationUrl}>{props.location}</a></p>
                    <p>{props.description}</p>
                </div>

                {claimSection}
            </div>
        </div>
    );
}

export default Item;
