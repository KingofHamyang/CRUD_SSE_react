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
        var { value } = on.target;
        var dot = '\u2022';
        if(this.props.inputype === 'password') {
            value = dot.repeat(value.length);
        }
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
                    type={this.props.inputype}
                    placeholder={this.props.placeholder}
                    value={inputValue}
                    style={{color: this.props.inputcolor}}
                    spellCheck={false}
                />
                <span className='input-highlight' >
                    { inputValue.replace(/ /g, "\u00a0") }
                </span>
            </div>
        );
    }
}
CustomInput.defaultProps = {
    inputcolor: '#252525',
    placeholder: 'Write Anything...',
    inputype: 'text',
}

:root {
    --input-font-size: 30px;
    --input-line-height: 70px;
    --font-family: Roboto Slab, sans-serif;
}

.input-highlight {
    font-size: var(--input-font-size);
    line-height: var(--input-line-height);
    font-family: var(--font-family);
    max-width: 100%;
    color: transparent;
    user-select: none;
    overflow: hidden;
    border-top: 3px solid #252525;
    position: absolute;
    left: 0;
    bottom: 0;
    height: 0;
}
.input_wrap {
    width: 90%;
    margin: 50px auto;
    position: relative;
}
.input_wrap input {
    height: 60px;
    width: 100%;
    min-width: 100%;
    padding: 0;
    border-radius: 0;
    line-height: var(--input-line-height);
    background-color: transparent;
    font-size: var(--input-font-size);
    border: none;
    outline: none;
    border-bottom: 3px solid #A4A4A4;
    font-family: var(--font-family);
}
@media (max-width: 600px) {
    .input-highlight {
        font-size: 20px;
    }
    .input_wrap input {
        font-size: 20px;
    }
}
