import React, { Component } from 'react';
import CustomInput from './CustomInput';
import './Login.css'

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            isFocusedID: false,
            isFocusedPW: false,
        }
    }
    onFocusID = () => {
        this.setState({isFocusedID: true});
    }
    onBlurID = () => {
        this.setState({isFocusedID: false});
    }
    onFocusPW = () => {
        this.setState({isFocusedPW: true});
    }
    onBlurPW = () => {
        this.setState({isFocusedPW: false});
    }
    render() {
        const { isFocusedID, isFocusedPW } = this.state;
        return (
            <div className="popup">
                <div className="popupbody">
                    <div className="closepop" onClick={this.props.closePop}>&times;</div>
                    <div className={isFocusedID | isFocusedPW ? "popfocused" : "popmain"}>
                        Login
                    </div>
                    <div className="loginform">
                        <CustomInput placeholder="Student ID" type="text" isFocused={this.state.isFocusedID} onFocus={this.onFocusID} onBlur={this.onBlurID}/>
                        <CustomInput placeholder="Password" type="password" isFocused={this.state.isFocusedPW} onFocus={this.onFocusPW} onBlur={this.onBlurPW}/>
                    </div>
                </div>
            </div>
        );
    }
}