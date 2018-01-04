import React, { Component } from 'react';

export class Textbox extends Component {
    state = { inputVal: ''};

    handleOnChange = (event) => {
        this.setState({
            inputVal: event.target.value
        })
    }

    handleOnBlur = (event) => {
        console.log(this.state.inputVal);
    }

    render() {
        return (
            <input value={this.state.inputVal} onChange={this.handleOnChange} onBlur={this.handleOnBlur}/>
        );
    }
}
