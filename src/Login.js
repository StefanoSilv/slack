import React, {Component} from 'react';
import axios from 'axios'

class Login extends Component {
	state = {
		email:'',
		password:''
	}

	changeEmail = (e) => {
		this.setState({email: e.target.value})
	}

	changePassword = (e) => {
		this.setState({password: e.target.value})
	}

	login = (e) => {
		e.preventDefault()
		axios.post('http://localhost:4000/api/login', this.state).then((res) => {
			localStorage.setItem('token', res.data.token)
		}).catch((err) => {
			console.log('err', err)
		})
	}



	render(){
		return(
			<div className="row">
				<div className="col-4 offset-4">
					<div className="card login">
						<div className="card-body">
							<form onSubmit={(e) => this.login(e)}>
								<div className="form-group">
									<input type="email" className="form-control" placeholder="Email..."
									value={this.state.email} onChange={(e) => this.changeEmail(e)} />
									 <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
								</div>
								<div className="form-group">
									<input type="password" className="form-control" placeholder="Password..."
									value={this.state.password} onChange={(e) => this.changePassword(e)} />
								</div>
								<button type="submit" className="btn btn-primary">Login</button>
							</form>
						</div>
					</div>
				</div>
			</div>


		)
	}
}

export default Login;
