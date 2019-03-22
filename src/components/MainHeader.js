import React, { Component } from 'react';
import NoticePreview from './NoticePreview';
import './MainHeader.css';

class DenoteBirthday extends Component {
    constructor() {
        super();
        this.state = {
            index: 0,
            isOpen: false,
            birthlist: [{
                studentid: 17,
                studentname: '홍길동'
            },{
                studentid: 13,
                studentname: '가나다'
            },{
                studentid: 14,
                studentname: '송민찬'
            }]
        }
    }
    timer = () => {
        var newindex = this.state.index + 1;
        newindex = (newindex)%(this.state.birthlist.length);
        this.setState({index: newindex});
    }
    componentDidMount() {
        if(this.state.isOpen) setInterval(this.timer, 3000);
    }
    showchar = () => {
        return (
            this.state.birthlist[this.state.index].studentid+'학번 '+this.state.birthlist[this.state.index].studentname
        );
    }
    render() {
        return (
            <div className="birthList">
                <div className={this.state.isOpen? "ListBox": "Listmini"}>
                    {this.state.isOpen? this.showchar(): null}
                </div>
                <i className={this.state.isOpen? "fa fa-times showList":"fa fa-gift blindList"} onClick={() => {this.setState({isOpen: !this.state.isOpen})}}/>
            </div>
        );
    }

} 

export default class MainHeader extends Component {
    constructor() {
        super();
        this.state = {
            Name: 'SemSemi' 
        }
    }
    
    render() {
        return (
            <div className="headerwrap">
                <div className="Logo">
                    <div id="NameIndex">{this.state.Name}</div>
                    <div className="navName">{this.props.navlist.map((content, i) => {
                        return (<span key={i}>{content.name}&nbsp;</span>)
                    })}
                    </div>
                </div>
                <DenoteBirthday />
                <NoticePreview />
            </div>
        );
    }
}