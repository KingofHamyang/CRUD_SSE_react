import React, { Component } from 'react';
import './CustomInput.css';
export default class CustomInput extends Component {
    constructor() {
        super();
        this.state = {
            inputValue: ''
        };
        this.onInputChange = this.onInputChange.bind(this);
    }
    onInputChange(on) {
        const { value } = on.target;

        this.setState({
            inputValue: value
        });
    }
    render() {
        const { inputValue } = this.state;
        return (
            <div className='input_wrap'>
                <input
                    onChange={this.onInputChange}
                    placeholder={this.props.placeholder}
                    value={inputValue}
                    style={{color: this.props.inputcolor}}
                    spellCheck={false}
                />
                <span className='input-highlight'>
                    { inputValue.replace(/ /g, "\u00a0") }
                </span>
            </div>
        );
    }
}
CustomInput.defaultProps = {
    inputcolor: 'white',
    placeholder: 'Write Anything...',
}