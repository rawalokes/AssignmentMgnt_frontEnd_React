import React, { Component } from 'react'
import './style.css';
export default class Student extends Component {
    render() {
        return (
            <div>
                <div class="header">
                    <h1>Student</h1>
                </div>

                <a href="/assignment">
                    <div class="myDiv">
                        <h5>VIEW</h5>
                    </div>
                </a>
                <a href="/submit">
                    <div class="myDiv">
                        <h5>Submit</h5>
                    </div>
                </a>
                <a href="#">
                    <div class="myDiv">
                        <h5>DashBoard</h5>
                    </div>
                </a>
                <a href="#">
                    <div class="myDiv">
                        <h5>DashBoard</h5>
                    </div>
                </a>
            </div>
        )
    }
}
