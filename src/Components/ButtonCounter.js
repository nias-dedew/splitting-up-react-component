import React from 'react'

class ButtonCounter extends React.Component {
    state = {
        count: 0,
    };

    decrement = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div>
                <span>{this.state.count}</span> <br />
                <button disabled={this.state.count <= 0} onClick={this.decrement}>-</button>
                <button onClick={this.increment}>+</button>
            </div>
        )
    }
}

export default ButtonCounter;

