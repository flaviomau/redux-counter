import React, { Component } from 'react'

class Counter extends Component{
    render(){
        return (
            <p>
                Counter: 0
                <button>+</button>
                <button>-</button>
            </p>
        )
    }
}

export default Counter