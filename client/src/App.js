import React, { Component } from 'react';

import Home from './components/Home';
import Header from './components/Header';
import './App.css';

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<Home />
			</div>
		)
	}
}

export default App;
