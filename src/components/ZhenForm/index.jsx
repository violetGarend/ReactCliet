import React, { Component } from 'react'
import { Form,Input } from 'antd'
export default class ZhenForm extends Component {
    render() {
        const {name} = this.props
        return (
            <div>
                <Form  name="control-hooks">
                    <Form.Item rules={[{ required: true }]} >
                        <Input defaultValue={name} key={name} onChange={e=>{this.props.changeName(e.target.value)}}/>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
