import React, {Component} from 'react';

class Newmessage extends Component {
state = {
	text:''
	}
	changeText = (e) => {
			this.setState({
				text: e.target.value
			})
		}

		clearMessage = () => {
			this.setState({
				text: ''
			})
		}

  render(){
		return(
			<div id="new-messages">
			<form onSubmit={(e) => {
					this.props.createMessage(e, this.state.text);
					this.clearMessage()}
				}>

					<div className="input-group">
						<input type="text" className="form-control"
						value={this.state.text} 
						placeholder="Insert your messages"
						onChange={(e) => this.changeText(e)} />
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
