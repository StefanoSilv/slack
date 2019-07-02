import React, {Component} from 'react';

class Newmessage extends Component {
state = {
	createMessage: this.props.createMessage,
	changeText: this.props.changeText,
	text: this.props.text
	}

  render(){
		return(
			<div id="new-messages">
				<form onSubmit ={(e) => this.props.createMessage(e)}>
					<div className="input-group">
						<input type="text" className="form-control" value={this.props.text} placeholder="Insert your messages" onChange={(e) => this.props.changeText(e)} />
						<div className="input-group-append">
							<button className="btn btn-outline-secondary" type="submit" id="button-addon2">Send</button>
						</div>
					</div>
				</form>
			</div>
		)
	}
}

export default Newmessage
