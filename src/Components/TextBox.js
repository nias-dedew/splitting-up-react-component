import React, { Component } from 'react';

class TextBox extends Component {
    state = {
        color: '',
    }

    onChangeColor = e => {
        this.setState({
            color: e.target.value
        })
    }

    render() {
        const styleColor = {
            background: this.state.color
        }

        return (
            <div style={styleColor}>
                <input type="text" onChange={this.onChangeColor} value={this.state.color} />
            </div>

        )
    }
}

export default TextBox;
