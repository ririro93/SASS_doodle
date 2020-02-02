import React, { Component } from 'react';

import AddTemplate from './components/AddTemplate';

import './styles/App.scss';

export default class App extends Component {
	
	state = {
		currColor: "",
	}

	handleClickColor = (e) => {
		this.setState({
			currColor: e.target.attributes.value.value
		})
		
	}
	
	render() {
		const { currColor } = this.state;
		const { 
			handleClickColor,
		} = this;
		
		console.log("render App");
		console.log("App currColor: ", currColor);
		
		return(
			<main className="App">
				<div className="title">
					Phonebook Practice!
				</div>
				<section className="search">
					this part for searching
				</section>
				<section className="add">
					<AddTemplate 
						onClick={handleClickColor}
						currColor={currColor}
					/>
				</section>
				<section className="info-list">
					this part for listing info
				</section>
			</main>
		);
	}
}