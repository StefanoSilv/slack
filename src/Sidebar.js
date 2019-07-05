import React, {Component} from 'react';
import './Sidebar.css';
import Channel from './Channel.js'
import axios from 'axios'

class Sidebar extends Component {
	state = {
	workspace: 'Tortuga Coders',
	channels:[]
	}
	componentWillMount(){
		axios.get('http://localhost:4000/api/channels').then((res) => {
			console.log('res.data' , res.data)
			this.setState({
					channels: res.data
			})
		}).catch((err) =>{
			console.log(err);
		})
	}
	
	selectChannel = (id) => {
		let channels = this.state.channels
		channels.forEach( (c) => delete c.active)
		let channel = channels.find( (c) => c._id === id )
		channel.active = true
		this.setState({channels})
		this.props.getMessages(id)
	}

	render(){
		return(
			<div id="sidebar">
				<h2>{this.state.workspace}</h2>
				<ul className="list-unstyled">
					{
						this.state.channels.map( (c) => {
							return <Channel channel={c} key={c._id}
							selectChannel={this.selectChannel}
							/>
						})
					}
				</ul>
			</div>
		)
	}
}

export default Sidebar;
