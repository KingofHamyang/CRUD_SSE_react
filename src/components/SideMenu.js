import React, { Component } from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './SideMenu.css';

class NotLogged extends Component {
    render() {
        return (
            <div class="login">
                <div class="userInfo">
                    기본
                </div>
                <div class="loginbox">
                    로그인
                </div>
                <Button color="danger">Danger!</Button>
            </div>
        );
    }
}

class IsLogged extends Component {
    render() {
        return (
            <div>
                로그아웃하기
            </div>
        );
    }
}

class SideNav extends Component {
    constructor() {
        super();
        this.state = {
            isLogin: false
        }
    }
    render() {
        return (
            <div class="hiddenNav">
                <span class="closebtn" onClick={this.props.CloseNav}>&times;</span>
                <div class="Navheader">
                    {
                        this.state.isLogin
                        ? <IsLogged />
                        : <NotLogged />
                    }
                </div>
                <div class="Navlist">
                    <span>About</span>
                    <span>About</span>
                    <span>About</span>
                    <span>About</span>
                </div>
            </div>
        )
    }
}

export default class SideMenu extends Component {
    constructor() {
        super();
        this.state = {
            NavVisible: false
        };
    }
    openNav = () => {
        this.setState({NavVisible: true});
    }
    closeNav = () => {
        this.setState({NavVisible: false});
    }
    render() {
        return (
            <div class="Sidemenu">
                {
                    this.state.NavVisible
                    ? <SideNav CloseNav={this.closeNav}/>
                    : null
                }
                <span class="menu" onClick={this.openNav}>
                    &#9776;
                </span>
            </div>
        );
    }
}