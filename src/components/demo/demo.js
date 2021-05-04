import React, { Component } from 'react'
import "./demostyle.css"

export default class Demo extends Component {
    render() {
        return (
            <div className="center">
                <div class='header'>
                <p>Assignment Management System</p>
                </div>
                <div class='welcome'>
                    <p>WEL-COME!</p>
                </div>
                <div class='btn'>
                <button onClick={(e)=>'/login'}>Log In</button>
                    {/*<button type='button'>Log In</button>*/}

                </div>
                <div class='footer'>
                    <p> copyright </p>
                </div>

            </div>
        )
    }
}