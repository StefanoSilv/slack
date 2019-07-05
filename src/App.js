import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Sidebar from './Sidebar'
import Content from './Content'
import Signup from './Signup'

class App extends Component {
	state = {
		channel: ''
	}

	getMessages = (id) => {
		this.setState({
			channel: id
		})
	}

	render(){
		return(
			<div id="wrap">
				<Sidebar getMessages={this.getMessages} />
				<Content channel={this.state.channel} />
			</div>

		)
	}
}

export default App;
