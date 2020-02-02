import React, { Component } from 'react';
import classNames from 'classnames';
import './App_sass.scss';

class App extends Component {
	state = {
		red: false,
		blue: false,
		orange: false,
		color: '',
	}
	
	handleClick = (e) => {
		let bool = (e.target.value === 'true');
		this.setState({
			[e.target.name]: !bool
		})
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	}
	
	render() {
		console.log(this.state);
		const { red, blue, orange, color } = this.state;
		
		return (
			<main className="App">
				<input
					className={`box ${color}`}
					onChange={this.handleChange}
					value={color}
					name="color"
				/>
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
