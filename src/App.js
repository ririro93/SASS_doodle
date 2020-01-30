import React, { Component } from 'react';
import classNames from 'classnames';
import './App.scss';

class App extends Component {
	state = {
		red: false,
		blue: false,
		orange: false,
	}
	
	handleClick = (e) => {
		let bool = (e.target.value == 'true');
		this.setState({
			[e.target.name]: !bool
		})
	}

	render() {
		console.log(this.state);
		const { red, blue, orange } = this.state;
		
		return (
			<main className="App">
				<button 
					className={classNames('box', {red})}
					onClick={this.handleClick}
					name="red"
					value={red}
				>
					{red}
				</button>
				<button 
					className={classNames('box', {blue})}
					onClick={this.handleClick}
					name="blue"
					value={blue}
				>
					{blue}
				</button>
				<button 
					className={classNames('box', {orange})}
					onClick={this.handleClick}
					name="orange"
					value={orange}
				>
					{orange}
				</button>
			</main>
		);
  }
}

export default App;
