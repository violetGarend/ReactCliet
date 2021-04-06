import React, { Component } from 'react'
import { Form, Input, Select } from 'antd'
const { Option } = Select
export default class AddForm extends Component {
    optionChange = (e) => {
        this.props.addClass(this.option,e.target.value)
    }
    render() {
        const { categoryContent,parentId} = this.props
        // this.props.updateSelect(parentId)
        return (
            <div>
                <Form name="control-hooks">
                    <Form.Item rules={[{ required: true }]} >
                        <div style={{ marginBottom: '10px' }}>所属分类：</div>
                        <Select defaultValue={parentId} onChange={(e)=>this.props.updateSelect(e)} key={parentId}>
                            <Option value="0">一级分类</Option>
                            {categoryContent.map(item => {
                                return <Option value={item._id} key={item._id}>{item.name}</Option>
                            })}
                        </Select>
                    </Form.Item>
                    <Form.Item rules={[{ required: true }]} >
                        <div style={{ marginBottom: '10px' }}>分类名称：</div>
                        <Input onChange={this.optionChange}/>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
