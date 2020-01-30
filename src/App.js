import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  render() {
    return (
    	<main className="App">
			<div className="box red">
				1번째 div
			</div>
			<div className="box blue">
				2번째 div
			</div>
			<div className="box orange">
				3번째 div
			</div>
		</main>
    );
  }
}

export default App;
