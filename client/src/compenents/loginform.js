import React, { Component } from 'react';
import { connect } from 'react-redux';
import bcrypt from 'bcryptjs';
import axios from 'axios';

class LoginForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			formValues: { username: '', password: '' }
		};

		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event) {
		event.preventDefault();
		const formValues = this.state.formValues;
		const name = event.target.name;
		formValues[name] = event.target.value;

		this.setState({ formValues });
	}

	onFormSubmit(event) {
		event.preventDefault();
		// axios.post('/auth/local', this.state.formValues).then((req, res) => {
		// 	console.log(req);
		// 	console.log(res);
		// });

		//we need to hash the password
		//we need to reset password state to hashed pass
		//hash promise
		// var loginObject = {
		// 	username: this.state.formValues.username,
		// 	password: ''
		// };
		// const hash = new Promise((resolve, reject) => {
		// 	bcrypt.hash(this.state.formValues['password'], 8, function(error, hash) {
		// 		if (error) {
		// 			reject(error);
		// 		}
		// 		resolve(hash);
		// 	});
		// });
		// hash.then(hashedPassword => {
		// 	loginObject.password = hashedPassword;
		// 	axios.post('/auth/local', loginObject).then(user => {
		// 		console.log(user);
		// 	});
		// });
		// var loginObject = {
		// 	username: this.state.formValues.username,
		// 	password: ''
		// };
		// we need to submit username and hashed password to passport-local
	}

	render() {
		return (
			<div>
				<form onSubmit={this.onFormSubmit}>
					<input
						type="username"
						value={this.state.formValues['username']}
						onChange={this.onInputChange}
						placeholder="username"
						name="username"
					/>
					<input
						type="password"
						value={this.state.formValues['password']}
						onChange={this.onInputChange}
						placeholder="password"
						name="password"
					/>
					<button type="submit">submit</button>
				</form>
				<a href="/auth/google">login with google</a>
			</div>
		);
	}
}

export default LoginForm;
