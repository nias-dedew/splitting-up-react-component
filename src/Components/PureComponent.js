/**
 * TODO: Please create a class component named `PureComponent, that have a props called `name`
 * and render a <div> with text `Regular component {props.name}`
 * (don't forget to export it)
 */

import React from "react";

class PureComponent extends React.PureComponent {

    render() {
        return (
            <div>
                Pure component {this.props.name}
            </div>
        )
    }
}

export default PureComponent;

