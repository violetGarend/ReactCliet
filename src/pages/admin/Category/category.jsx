import React, { Component } from 'react'
//引入antd组件
import { Card, Button, Table, Modal } from 'antd';
//获取数据
import { reqCategorys, reqUpdateCategorys, reqAddCategorys } from '@/api/index.js'
//二次封装的Form
import ZhenForm from '@/components/ZhenForm/index.jsx'
import AddForm from '@/components/AddForm/index.jsx'
//图标
import { PlusOutlined, DoubleRightOutlined } from '@ant-design/icons';
export default class Category extends Component {
    state = {
        categoryContent: [],
        parentId: '0',
        newcategoryContent: [],
        selectName: '',
    }
    componentDidMount() {
        //获取列表
        this.getcategoryContent()
    }
    //获取一级列表
    getcategoryContent = () => {
        reqCategorys(this.state.parentId).then(res => {
            let categoryContent = [...res.data.data]
            this.setState({
                categoryContent
            })
        })
    }
    //改变ID,且获取当前一阶列表选中的name
    changeParentId = (item) => {
        reqCategorys(item._id)
            .then(res => {
                this.setState({
                    newcategoryContent: res.data.data,
                    parentId: item._id,
                    selectName: item.name,
                    stateAddOrUpdate: 0
                })
            })
    }
    //将ID改回去
    backParentId = () => {
        if (this.state.parentId === '0') return
        this.setState({
            parentId: '0',
            selectName: ''
        })
    }
    //添加&更新状态的modal改回0
    stateAddOrUpdateBack = () => {
        this.setState({
            stateAddOrUpdate: 0
        })
    }
    //点击修改分类
    classify = (item) => {
        this.setState({
            stateAddOrUpdate: 1,
        })
        //保存下选中者的name
        this.name = item.name
        //保存一下ID
        this.id = item._id
    }
    //按确定按钮
    confirmChange = async () => {
        //取消model显示
        this.stateAddOrUpdateBack()
        //发送请求 
        await reqUpdateCategorys(this.id, this.newName)
        //更新页面
        this.getcategoryContent()
    }
    //点击添加按钮
    classifyAdd = () => {
        this.setState({
            stateAddOrUpdate: 2
        })
    }
    //新的Name，用于发送请求
    changeName = (newName) => {
        this.newName = newName
    }
    //记录分类
    addRecord=(parentId,categoryName)=>{
        this.categoryName = categoryName
        this.parentId = parentId
    }
    //添加分类
    addClass = () => {
        const {categoryName,parentId} = this
        console.log(categoryName,parentId);
        reqAddCategorys(categoryName,parentId)
        .then(()=>{
            //如果添加的是当前页面，更新
            if(parentId===this.state.parentId)  this.getcategoryContent()
            //隐藏添加框
            this.stateAddOrUpdateBack()
        })
    }
    //更新选中
    updateSelect=(parentId)=>{
        this.parentId = parentId
    }
    render() {
        const columns = [
            {
                title: '名称',
                dataIndex: 'name',
                key: '_id'
            },
            {
                title: '操作',
                key: '_id',
                render: (item) => {
                    return <span>
                        <Button style={{ border: 'none', borderColor: 'none', color: "#1e90ff" }} onClick={() => this.classify(item)}>修改分类</Button>
                        {this.state.parentId === '0' ? <Button style={{ border: 'none', color: "#1e90ff" }} onClick={() => this.changeParentId(item)}> 查看子分类</Button> : ''}
                    </span>
                }
            }
        ];
        const { categoryContent, newcategoryContent, parentId, selectName, stateAddOrUpdate } = this.state
        this.parentId = this.state.parentId
        return (
            <div className="category">
                <Modal visible={stateAddOrUpdate === 1} onCancel={this.stateAddOrUpdateBack} onOk={this.confirmChange} title="修改分类" okText="确定" cancelText="取消">
                    <ZhenForm name={this.name} changeName={this.changeName}></ZhenForm>
                </Modal>

                <Modal visible={stateAddOrUpdate === 2} onCancel={this.stateAddOrUpdateBack} onOk={this.addClass} title="添加分类" okText="确定" cancelText="取消">
                    <AddForm categoryContent={categoryContent} parentId={this.parentId} addClass={this.addRecord} updateSelect={this.updateSelect}></AddForm>
                </Modal>
                <Card title={<div><span style={{ color: parentId === '0' ? '' : '#1e90ff', userSelect: 'none', cursor: parentId === '0' ? '' : 'pointer', marginRight: '10px' }} onClick={this.backParentId}>一级分类列表</span><DoubleRightOutlined style={{ display: parentId === '0' ? 'none' : '' }} /><span>{selectName}</span></div>} extra={<Button type="primary" onClick={this.classifyAdd}><PlusOutlined />添加</Button>} >
                    <Table dataSource={parentId === '0' ? categoryContent : newcategoryContent} columns={columns} rowKey="_id" bordered loading={this.state.categoryContent.length < 0}
                        pagination={{ pageSize: 5, showQuickJumper: true, simple: true }}>
                    </Table>
                </Card>
            </div>
        )
    }
}
