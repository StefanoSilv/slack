import React, {Component} from 'react';

class Messages extends Component {
	state={
		messages: this.props.messages
	}
	render(){
		return(
			<div>
				<span className="author">{this.state.messages.author.name}</span>
				<span className="date">{this.state.messages.date}</span>
				<div className="message">
				{this.state.messages.body}
				</div>
			</div>
		)
	}
}

export default Messages;
