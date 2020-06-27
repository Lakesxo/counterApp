import React, { Component } from 'react';
import './index.css'

class Counter extends Component {
    constructor(){
        super()
        this.state = {
            number : 0
        }

    }
    handleClick=()=>{
        this.setState({
            number:this.state.number + 1
        })
    }    
    cropClick=()=>{
        this.setState({
            number:this.state.number - 1
        })
    }

    render() { 
        return (  
            <div className="bodyy">
                <div className="container">
                    <h2>{this.state.number}</h2>
                    <button onClick={this.handleClick}>Click to increase</button>
                    <button onClick={this.cropClick}>Click to decrease</button>
                    <p>Made with <span role="img">❤️</span> by <a href="https://linktr.ee/lakes_xo" target="_blank">Lakes X'O</a></p>
                </div>
            </div>
            
        );
    }
}
 
export default Counter;