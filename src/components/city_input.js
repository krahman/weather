import React from 'react';
import { Component } from 'react';

export default class CityInput extends Component {

	constructor(props) {
		super(props);

		this.onCityInputChange = this.onCityInputChange.bind(this);
	}

	onCityInputChange(event) {
		this.props.onCityInputChange(event);
	}

	render() {
		return (
			<div className="form-group city-bar">
		    	<div className="input-group">
		      		<div className="input-group-addon">City</div>
		      		<input 
						type="text"
						value={this.props.city}
						onChange={this.onCityInputChange}
						className="form-control"
					/>
		    	</div>
		  	</div>
		);
	}
}