import React, { Component } from 'react';
import Login from './routes/Login';
import SideMenu from './components/SideMenu';
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div>
        <SideMenu />
        <Login />
      </div>
    );
  }
}

export default App;
