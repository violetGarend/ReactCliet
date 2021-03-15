import React, { Component } from 'react'
import './login.less'
import logo from './image/05.jpg'
export default class login extends Component {
    render() {
        return (
            <div className="login">
                <header className="login_heard">
                    <img src={logo} alt="logo" className="login_heard_img"/>
                    <div className="login_heard_div">后台管理系统</div>
                </header>
                <div className="login_content">
                    <h1>用户登录</h1>
                    <div>From</div>
                </div>
            </div>
        )
    }
}
