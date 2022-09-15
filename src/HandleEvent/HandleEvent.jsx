import React, { Component } from 'react'

export default class HandleEvent extends Component {


    HandleClick = (event) => {
        // alert("say hello")
        event.target.className = "btn btn-success"
        event.target.innerHTML = "Niko"
    }

    ShowMess = (name) => {
        alert("hello " + name)
    }

    render() {



        return (
            <div>
                <button className='btn btn-dark' onClick={this.HandleClick}>Hunter</button>
                <button className='btn btn-dark' onClick={(e) => {

                    this.ShowMess("Vampire")
                    e.target.innerHTML = "Hi! Jackz"

                }}>
                    hello
                </button>
                
            </div>
        )
    }
}
