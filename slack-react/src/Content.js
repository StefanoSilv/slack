import React, {Component} from 'react';
import './Content.css';

class Content extends Component {
  render(){
		return(
			<div id="content">
				<div id="messages">
					<span className="author">Stefano Silvestrini</span>
					<span className="date">11th July 2019</span>
					<div className="message">
					This is a new message
					</div>
					<span className="author">Stefano Silvestrini</span>
					<span className="date">11th July 2019</span>
					<div className="message">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</div>
					<span className="author">Stefano Silvestrini</span>
					<span className="date">11th July 2019</span>
					<div className="message">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</div>
					<span className="author">Stefano Silvestrini</span>
					<span className="date">11th July 2019</span>
					<div className="message">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</div>
				</div>
				<div id="new-messages">
				<div className="input-group">
					<input type="text" className="form-control" placeholder="Insert your messages" />
						<div className="input-group-append">
							<button className="btn btn-outline-secondary" type="button" id="button-addon2">Send</button>
  					</div>
				</div>
				</div>
			</div>
		)
	}
}

export default Content;
