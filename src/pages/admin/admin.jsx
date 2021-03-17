import React, { Component } from 'react'
import './admin.less'

//使用antd的layout布局
import { Layout } from 'antd';
//但是咱们用自己的Header
import Header from '../../components/Header'
import LeftNav from '../../components/LeftNav'
const { Footer, Sider, Content } = Layout;

export default class admin extends Component {
    render() {
        return (
            <div className="admin">
                <Layout className="layout1">
                    <Sider width="250" style={{ backgroundColor: '#fff'}}>
                        <LeftNav></LeftNav>
                    </Sider>
                    <Layout className="layout2">
                        <Header></Header>
                        <Content className="content">Content</Content>
                        <Footer className="footer">使用谷歌浏览器可获得更加浏览效果</Footer>
                    </Layout>
                </Layout>
            </div>
        )
    }
}
