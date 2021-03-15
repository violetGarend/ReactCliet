import React, { Component } from 'react'
import './login.less'
//引入图片
import logo from './image/05.jpg'
//引入antd组件们
import { Form, Input, Button } from 'antd';
export default class login extends Component {
    render() {
        return (
            <div className="login">
                <header className="login_heard">
                    <img src={logo} alt="logo" className="login_heard_img" />
                    <div className="login_heard_div">后台管理系统</div>
                </header>
                <div className="login_content">
                    <h1>用户登录</h1>

                    <Form
                        name="basic"
                        initialValues={{ remember: true }}
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
}
