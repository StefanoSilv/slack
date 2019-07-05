import React, {Component} from 'react';
import './Content.css';
import Messages from './Messages.js'
import Newmessage from './Newmessage.js'
import axios from 'axios'


class Content extends Component {
	state = {
		messages:[]
	}
	componentWillReceiveProps(props) {
		axios.get(`http://localhost:4000/api/messages?channel=${props.channel}`).then((res) => {
			this.setState({
				messages: res.data
			})
		}).catch((err) => {
			console.log('err', err)
		})
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

	componentWillMount(){
		axios.get('http://localhost:4000/api/messages').then((res) =>{
			console.log('res.data' , res.data)
			this.setState({
					messages: res.data
			})
		}).catch((err) =>{
			console.log(err);
		})
	}

	render(){
		return(
			<div id="content">
				<div id="messages">
				{
					this.state.messages.map( (m) => {
						return <Messages messages={m} key={m._id} />
					})
				}
				</div>
				< Newmessage text={this.state.text} createMessage={this.createMessage}
				changeText={this.changeText}
				/>
			</div>
		)
	}
}

export default Content;
