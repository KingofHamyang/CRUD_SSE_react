import React, { Component } from 'react';
import './NoticePreview.css'

export default class NoticePreview extends Component {
    render() {
        return (
            <div className="noticewrap">
                <div className="noticetitle">
                    Notice
                    <span>+</span>
                </div>
            </div>
        );
    }
}