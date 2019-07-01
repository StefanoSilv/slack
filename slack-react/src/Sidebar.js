import React, {Component} from 'react';
import './Sidebar.css';
import Channel from './Channel.js'

class Sidebar extends Component {
	state = {
	workspace: 'Tortuga Coders',
	channels:[{id:1,name:'programming'},{id:2,name:'general'}]
	}

	render(){
		return(
			<div id="sidebar">
				<h2>{this.state.workspace}</h2>
				<ul className="list-unstyled">
					<li className="active">Threads</li>
					{
						this.state.channels.map((c) => {
							return <Channel />
						})
					}
				</ul>
			</div>
		)
	}
}

export default Sidebar;
