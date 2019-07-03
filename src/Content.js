import React, {Component} from 'react';
import './Content.css';
import Messages from './Messages.js'
import Newmessage from './Newmessage.js'

class Content extends Component {
	state = {
		messages:[{
				id:1,
				author:'Stefano Silvestrini',
				date: '19th July 2019',
				body: 'Hey, whats up?'
			},
			{
				id:2,
				author:'Stefano Silvestrini',
				date: '19th July 2019',
				body: 'Hey, r u there?'
			},
			{
				id:3,
				author:'Stefano Silvestrini',
				date: '19th July 2019',
				body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
			}
		]
	}

	createMessage = (e, text) => {
		e.preventDefault()
		let message = {
			id: 7,
			author: 'Tony Russo',
			date: '3 July 2019 - 9:42 AM',
			body: text
		}
		let messages = this.state.messages
		messages.push(message)
		this.setState({messages})
	}

	changeText = (e) => {
		this.setState({
			text: e.target.value
		})
	}

	render(){
		return(
			<div id="content">
				<div id="messages">
				{
					this.state.messages.map( (m) => {
						return <Messages messages={m} key={m.id} />
					})
				}
				</div>
				< Newmessage text={this.state.text} createMessage={this.createMessage} changeText={this.changeText} pushMessage={this.pushMessage}/>
			</div>
		)
	}
}

export default Content;
