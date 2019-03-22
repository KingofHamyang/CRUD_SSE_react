import React, { Component } from 'react';
import './SideMenu.css';

class NotLogged extends Component {
    render() {
        return (
            <div className="login">
                <i className="fa fa-user-circle userInfo"></i>
                <span className="loginbox" onClick={this.props.login}>로그인을 해주세요</span>
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
            <div className={this.props.visible ? 'openNav': 'hiddenNav'}>
                <span className="closebtn" onClick={this.props.CloseNav}>&times;</span>
                <div className="Navheader">
                    {
                        this.state.isLogin
                        ? <IsLogged />
                        : <NotLogged login={this.props.login}/>
                    }
                </div>
                <div className="Navlist">
                    <span>Reservation</span>
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
    render() {
        return (
            <div className="Sidemenu">
                <SideNav CloseNav={this.props.close} visible={this.props.visible} login={this.props.login}/>
                <span className="menu" onClick={this.props.open}>
                    &#9776;
                </span>
            </div>
        );
    }
}