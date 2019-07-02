import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Sidebar from './Sidebar'
import Content from './Content'

class App extends Component {
  render(){
		return(
			<div id="wrap">
			<Sidebar />
			<Content />
			</div>
		)
	}
}

export default App;
