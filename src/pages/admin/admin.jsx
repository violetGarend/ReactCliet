import React, { Component } from 'react'
import './admin.less'

//使用antd的layout布局
import { Layout } from 'antd';
//引入路由
import { Switch, Route, Redirect } from 'react-router-dom'
//但是咱们用自己的Header
import Header from '../../components/Header'
import LeftNav from '../../components/LeftNav'
//引入二级路由组件们
import Home from './home/Home'
import Category from './Category/Category'
import Product from './Product/Product'
import Role from './Role/Role'
import User from './User/User'
import Bar from './Charts/Bar'
import Line from './Charts/Line'
import Pie from './Charts/Pie'
import { getUser } from '@/utils/store.js'
        
const { Footer, Sider, Content } = Layout;

export default class admin extends Component {
    render() {
        if(JSON.stringify(getUser()) === "{}"){
            return (<Redirect to="/login"/>)
        }
        return (
            <div className="admin">
                <Layout className="layout1">
                    <Sider width="250" style={{ backgroundColor: '#fff' }}>
                        <LeftNav></LeftNav>
                    </Sider>
                    <Layout className="layout2">
                        <Header></Header>
                        <Content className="admin_content">
                            <Switch>
                                <Route path="/admin/home" component={Home}></Route>
                                <Route path="/admin/category" component={Category}></Route>
                                <Route path="/admin/product" component={Product}></Route>
                                <Route path="/admin/role" component={Role}></Route>
                                <Route path="/admin/user" component={User}></Route>
                                <Route path="/admin/bar" component={Bar}></Route>
                                <Route path="/admin/line" component={Line}></Route>
                                <Route path="/admin/pie" component={Pie}></Route>
                                <Redirect to="/admin/home"></Redirect>
                            </Switch>
                        </Content>
                        <Footer className="footer">使用谷歌浏览器可获得更加浏览效果</Footer>
                    </Layout>
                </Layout>
            </div>
        )
    }
}
