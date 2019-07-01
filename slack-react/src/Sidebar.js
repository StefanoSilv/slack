import React, {Component} from 'react';
import './Sidebar.css';

class Sidebar extends Component {
  render(){
		return(
			<div id="sidebar">
				<h2>Tortuga Coders</h2>
				<ul className="list-unstyled">
					<li className="active">Threads</li>
					<li>Channels</li>
					<li>Add a channel</li>
					<li>Direct messages</li>
					<li>Apps</li>
				</ul>
			</div>
		)
	}
}

export default Sidebar;
