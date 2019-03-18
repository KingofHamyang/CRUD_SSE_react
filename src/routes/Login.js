import React, { Component } from 'react';
import CustomInput from '../components/CustomInput';
import './Login.css';

class Login extends Component {
    render() {
      return (
        <div className='LoginWrap'>
            <h1>Login</h1>
            <CustomInput placeholder='StudentID' />
            <CustomInput placeholder='Password' />
        </div>
      );
    }
  }
  
  export default Login;
  