import React, { Component } from 'react';
import classNames from 'classnames';
import './../styles/AddTemplate.scss';

export default class AddTemplate extends Component {
	render() {
		const { onClick, currColor } = this.props;
		
		console.log("render AddTemplate");
		console.log("AddTemplate currColor: ", currColor);
		
		return(
			<div className="add-colors">
				<div 
					className={classNames('color red')} 
					onClick={onClick} 
					value="red" 
				/>
				<div 
					className="color blue" 
					onClick={onClick}
					value="blue" 
				/>
				<div 
					className="color orange" 
					onClick={onClick}
					value="orange" 
				/>
				<div className="add-button" onClick={onClick} value="button" >
					+
				</div>
				<div 
					className="color yellow"
					onClick={onClick} 
					value="yello" 
				/>
				<div 
					className="color green" 
					onClick={onClick} 
					value="green"
				/>
				<div 
					className="color violet"
					onClick={onClick}
					value="violet" 
				/>
			</div>
		);
	}
}