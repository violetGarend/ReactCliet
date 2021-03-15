import React, { Component } from 'react'
import './login.less'
//引入图片
import logo from './image/05.jpg'
//引入antd组件们
import { Form, Input, Button,message } from 'antd';
//引入axios
import {reqLogin} from '../../api/index.js'
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

                    {/* From */}
                    <Form
                        onValuesChange={this.onValuesChange}
                        onFinish={this.onFinish}
                        onFinishFailed={this.onFinishFailed}
                        initialValues={{
                            remember: true,
                        }}
                    >
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                }, {
                                    pattern: /^\w*\w$/,
                                    message: '须是英文，数字，或下划线>6'
                                }, {
                                    max: 12,
                                    message: '<12'
                                }, {
                                    min: 5,
                                    message: '>5'
                                }
                            ]}
                        >
                            <Input placeholder="Username" />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                }, {
                                    pattern: /^\w*\w$/,
                                    message: '须是英文，数字，或下划线>6'
                                }, {
                                    max: 12,
                                    message: '<12'
                                }, {
                                    min: 5,
                                    message: '>5'
                                }
                            ]}
                        >
                            <Input.Password placeholder="Password" />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                登陆
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
    state={
        username:'',
        password:''
    }
    onValuesChange = (e) => {
        if(e.username){
            this.setState({
                    username:e.username,
            })
        }else{
            this.setState({
                    password:e.password,
            })
        }
        
    }
    onFinish = (e) => {
        reqLogin(this.state.username,this.state.password)
        .then(res=>{
            if(res.data.status===1){
                message.error('用户名或密码错误')
            }else{
                message.success('登陆成功')
                this.props.history.replace(`/admin`)
            }
        })
        .catch(()=>{
            message.error('服务器错误')
        })
    }
    onFinishFailed = () => {
        message.error('请输入正确的用户名和密码错误')
    }
}