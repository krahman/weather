import React from 'react';
import { Component } from 'react';

export default class CountryList extends Component {
	
	constructor(props) {
		super(props);

		this.onCountryInputChange = this.onCountryInputChange.bind(this);
	}

	onCountryInputChange(event) {
		this.props.onCountryInputChange(event);
	}

	render() {
		return (
			<div className="form-group country-list">
		    	<div className="input-group">
		      		<div className="input-group-addon">Country</div>
		      		<input 
		      			type="text" 
		      			value={this.props.country}
		      			onChange={this.onCountryInputChange}
		      			className="form-control" 
	      			/>
		    	</div>
		  	</div>
		);
	}
}