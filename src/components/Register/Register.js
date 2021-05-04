import React, { Component } from 'react'
import {registerStd} from "../../apiCall/User";


export default class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			"name": '',
			'username': '',
			'password': '',
			"roll":''
		};
	}
	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	}
	handleSubmit = (event) => {
		event.preventDefault();
		var date = Date.now()
		registerStd(this.state.username, this.state.password, this.state.roll,this.state.name).then((res) => {
			localStorage.setItem("expiry_time", JSON.stringify(date + 86480000));
			localStorage.setItem("userinfo", JSON.stringify(res));
			console.log(res);
			console.log(localStorage.getItem('userInfo'));
			window.location.href='/login'
		}).catch((err) => {
			console.log(err);

		}
		)
	}



	render() {
		return (
			<div class="center">
				<form onSubmit={(event)=>this.handleSubmit(event)}>
					<div class="container">


						<label for="Name"><b>Full Name</b></label>
						<input type="text" placeholder="Enter FullName" name="name" id="name" required
							onChange={(e) => this.handleChange(e)} />

						<label htmlFor="Roll"><b>ROll NO</b></label>
						<input type="text" placeholder="Enter Roll no" name="roll" id="roll" required
							   onChange={(e) => this.handleChange(e)}/>

						<label for="email"><b>Username</b></label>
						<input type="text" placeholder="Enter Username" name="username" id="username" required
							onChange={(e) => this.handleChange(e)} />

						<label for="psw"><b>Password</b></label>
						<input type="password" placeholder="Enter Password" name="password" id="psw" required
							onChange={(e) => this.handleChange(e)} />


						<hr />

						<button type="submit" class="registerbtn"
						// onClick={()=>window.location.href='/login'}
						>Register</button>
					</div>

				</form>

			</div>
		)
	}
}
