import React, { Component } from 'react';
import SideMenu from './components/SideMenu';
import MainHeader from './components/MainHeader';
import Login from './components/Login';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      appfunc: [
        {name: 'Notice'},
        {name: 'Reservation'},
        {name: 'Free Board'},
        {name: 'Suggestion'},
      ],
      ispopup: false,
      isVisible: false,
    }
  }
  closeLogin = () => {
    if(this.state.ispopup) {
      this.setState({ispopup: false});
    }
  }
  openLogin = () => {
    this.setState({ispopup: true, isVisible: false});
  }
  openNav = () => {
    this.setState({isVisible: true});
  }
  closeNav = () => {
      this.setState({isVisible: false});
  }
  render() {
    return (
      <div>
        <SideMenu visible={this.state.isVisible} open={this.openNav} close={this.closeNav} login={this.openLogin}/>
        <MainHeader navlist={this.state.appfunc}/>
        {this.state.ispopup ? <Login closePop={this.closeLogin} /> : null}
      </div>
    );
  }
}

export default App;
