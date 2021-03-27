import React, { Component } from 'react'
import img from './06.jpg'
import './index.less'
import { Link, withRouter } from 'react-router-dom'
import { Menu } from 'antd';
import menuConfig from '../../config/menuConfig'

const { SubMenu } = Menu;
class LeftNav extends Component {
    render() {
        //用于随时指定选中card
        let action_path = this.props.history.location.pathname.slice(7)
        //自动展开cards
        let action_keys
        menuConfig.forEach(item => {
            if (item.children) {
                item.children.forEach(items => {
                    if (action_path === items.path) action_keys = item.path
                })
            }
        })
        return (
            <div className="left_nav">
                <div className="left_nav_header">
                    <img src={img} alt="图片" />
                    <h1>拉姆后台</h1>
                </div>

                <div style={{ width: 250 }} className="left_nav_menu">
                    <Menu
                        selectedKeys={[action_path]}
                        defaultOpenKeys={[action_keys]}
                        mode="inline"
                        theme="light"
                    >
                        {
                            menuConfig.map((item) => {
                                if (!item.children) {
                                    return this.createMenuItem(item)
                                } else {
                                    return (<SubMenu key={item.path} icon={<item.icon />} title={item.title}>
                                        {item.children.map((item) => {
                                            return this.createMenuItem(item)
                                        })}
                                    </SubMenu>)
                                }
                            })}
                    </Menu>
                </div>
            </div>
        )
    }
    //用于创建menu.item
    createMenuItem = (item) => {
        return (<Menu.Item key={item.path} icon={<item.icon />}><Link to={'/admin/' + item.path}>{item.title}</Link></Menu.Item>)
    }
}
export default withRouter(LeftNav)
