import React, {Component} from 'react';
import './Sidebar.css';
import Channel from './Channel.js'

class Sidebar extends Component {
	state = {
	workspace: 'Tortuga Coders',
	channels:[
		{
			id:1,
			name:'programming'
		},
		{
			id:2,
			name:'general'
		},
		{
			id:3,
			name:'branch 2'
		},
		{
			id:4,
			name:'fun'
		},
		{
			id:5,
			name:'threads'
		}
	]
	}

	selectChannel = (id) => {
		let channels = this.state.channels
		channels.forEach( (c) => delete c.active)
		let channel = channels.find( (c) => c.id === id )
		channel.active = true
		this.setState({channels})
		console.log(this.state.channels);
	}

	logHello = () => {
		console.log('Hello');
	}

	render(){
		return(
			<div id="sidebar">
				<h2>{this.state.workspace}</h2>
				<ul className="list-unstyled">
					{
						this.state.channels.map( (c) => {
							return <Channel logHello={this.logHello} channel={c} key={c.id} selectChannel={this.selectChannel}/>
						})
					}
				</ul>
			</div>
		)
	}
}

export default Sidebar;
