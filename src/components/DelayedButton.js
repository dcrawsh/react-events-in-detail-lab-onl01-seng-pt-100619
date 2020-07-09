// Code DelayedButton Component Here
import React, { Component } from 'react'

export default class DelayedButton extends Component {
    
    handleCLick = (e) => {
        e.persist()
        window.setTimeout(() => {
            this.props.onDelayedClick(e)}, this.props.delay)
    }
    
    render() {
        return (
            <div>
                <button onClick={this.handleCLick}>Delay Click</button>
            </div>
        )
    }
}
