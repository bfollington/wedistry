import React from "React";
import Item from "../Item";

export default class Registry extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p>Hello {this.props.user}</p>
                <ul>
                    { this.props.items.map( item => <li><Item name={item.name} /></li> ) }
                </ul>
            </div>
        );
    }
}
