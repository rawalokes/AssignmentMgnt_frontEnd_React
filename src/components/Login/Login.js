import React, {Component} from 'react';
import './style.css';
import {addData} from "../../apiCall/User";

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        var date = Date.now()
        addData(this.state.username, this.state.password, 3).then((res) => {
            if (this.state.username == 'admin')
                window.location.href = '/assign';
            else
                window.location.href = '/assignment';
            if (res == false) {
                window.location.href = '/register';
            } else {
                localStorage.setItem("userinfo", JSON.stringify(res));
                console.log(res);
                console.log(localStorage.getItem('userinfo'));

            }
        }).catch((err) => {
                if (err.response.status === 404) {
                    this.setState({username: '', password: ''});
                }
            }
        )
    }

    render() {
        return (
            <div class="center">
                <h2>Login Form</h2>

                <form onSubmit={(event) => this.handleSubmit(event)}>
                    {/* <div class="imgcontainer">
            <img src="img_avatar2.png" alt="Avatar" class="avatar" />
          </div> */}

                    <div class="container">
                        <label for="uname"><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" name="username"
                               onChange={(e) => this.handleChange(e)}
                               required/>

                        <label for="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="password"
                               onChange={(e) => this.handleChange(e)}
                               required/>
                    </div>
                    <div class='btn'>
                        <button type="submit">Login</button>
                    </div>
                </form>

                <span class="psw"><a href="/register">Register?</a></span>


            </div>
        );
    }
}
