import React, { Component } from 'react'

export default class admin extends Component {
    render() {
        return (
            <div>
                admin...
                <button onClick={this.a}>🔙</button>
            </div>
        )
    }
    a=()=>{
        this.props.history.push('/login')
    }
}
