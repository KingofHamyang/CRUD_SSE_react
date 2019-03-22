import React, { Component } from 'react';
import './CustomInput.css';

export default class CustomInput extends Component {
    constructor() {    
        super();
        this.state = {
            value: '',
        }
        this.onInputChange = this.onInputChange.bind(this);
    }
    onInputChange = (on) => {
        const {value} = on.target;
        this.setState({
            value: value,
        });
    }
    handleBlur = () => {
        if(this.state.value === '') {
            this.props.onBlur();
        }
    }
    render() {
        const { value } = this.state;
        const labelStyle = {
            position: 'absolute',
            left: 20,
            top: !this.props.isFocused ? -11 : -27,
            fontSize: !this.props.isFocused ? 23 : 17,
            color: !this.props.isFocused ? '#aaa' : 'crimson',
        }
        return (
            <div className='input_wrap'>
                <p style={labelStyle}>{this.props.placeholder}</p>
                <input
                    type={this.props.type}
                    className="form-style"
                    onChange={this.onInputChange}
                    autoComplete="off"
                    value={value}
                    onFocus={this.props.onFocus}
                    onBlur={this.handleBlur}
                />
            </div>
        );
    }
}

CustomInput.defaultProps = {
    placeholder: 'Write here...',
    type: 'text',
}