/**
 * TODO: Please create a class component named `RegularComponent, that have a props called `name`
 * and render a <div> with text `Regular component {props.name}`
 * (don't forget to export it)
 */

import React from "react";

class RegularComponent extends React.PureComponent {

    heavyText() {
        for (let i = 0; i < 800000000; i++) {

        }
        return "Heavy text";
    }

    render() {
        return (
            <div>
                Regular component {this.props.name} {this.heavyText()}
            </div>
        );
    }
}

export default RegularComponent;