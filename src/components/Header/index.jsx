import React, { Component } from 'react'
import './index.less'
import { Modal, message } from 'antd'
//引入用户名
import { getUser, reUser } from '@/utils/store.js'
import { getWeather } from '@/api/index.js'
//可使该组件可以使用路由组件的属性
import { withRouter } from 'react-router-dom'
//引入菜单数据用于比较路径获取title
import menuConfig from '@/config/menuConfig.js'
class Header extends Component {
    render() {
        const title = this.getTitle()
        return (
            <div className="header">
                <div className="header_top">
                    <div className="header_welcome_usernae">欢迎，{this.state.username}</div>
                    <div className="header_exit" onClick={this.clickExit}>
                        退出
                        <Modal title="提示" visible={this.state.clickExitstate} onOk={this.exitSelect}
                            okText="确定" cancelText="取消" >
                            是否退出登录？
                        </Modal>
                    </div>
                </div>

                <div className="floot">
                    <div className="header_home_text">{title}</div>
                    <div className="header_time_weather">{this.state.times}，{this.state.wea}</div>
                </div>
            </div>
        )
    }
    state = {
        times: '',
        username: '',
        wea: '',
        clickExitstate: false
    }
    componentDidMount() {
        //获取实时时间
        this.getTime()
        //获取天气
        getWeather({
            appid: '33242169',
            appsecret: '81IiPL8o',
            version: 'v61',
            city: '广州'
        }).then(res => {
            this.setState({
                wea: res.data.wea
            })
        })
        //取得用户名
        let username = getUser()
        if (JSON.stringify(getUser()) !== "{}") {
            // this.props.history.replace('/login')
            this.setState({
                username
            })
        }
    }
    componentWillUnmount() {
        //清除定时器
        clearInterval(this.timer)
        this.setState = () => null
    }
    //获取实时时间
    getTime = () => {
        this.timer = setInterval(() => {
            var date = new Date();
            var year = date.getFullYear(); //获取当前年份  
            var mon = date.getMonth() + 1; //获取当前月份  
            var da = date.getDate(); //获取当前日  
            var h = date.getHours(); //获取小时  
            var m = date.getMinutes(); //获取分钟  
            var s = date.getSeconds(); //获取秒  
            // eslint-disable-next-line no-useless-concat
            var t = year + '年' + mon + '月' + da + '日' + ' ' + h + ':' + m + ':' + s;
            this.setState({ times: t })
        }, 1000)
    }
    //获取title
    getTitle = () => {
        const nowTitle = this.props.history.location.pathname.slice(7)
        // console.log(nowTitle);
        let newTitle = ''
        menuConfig.forEach(item => {
            if (item.path === nowTitle) {
                newTitle = item.title
                return
            } else if (item.children) {
                let newTitle2 = item.children.find(items => items.path === nowTitle)
                if (newTitle2) newTitle = newTitle2.title
            }
        })
        return newTitle
        // console.log(newTitle);
    }
    //点击退出按钮
    clickExit = () => {
        // this.clickExitstate = !this.clickExitstate
        this.setState((e) => {
            return {
                clickExitstate: !e.clickExitstate
            }
        })
    }
    //退出功能
    exitSelect = () => {
        message.success('登出成功')
        reUser()
        this.props.history.replace('/login')
    }
}
export default withRouter(Header)