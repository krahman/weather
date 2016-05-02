import React from 'react';
import { Component } from 'react';

export default class SearchBar extends Component {
	constructor(props) {
		
		super(props);

		this.state = {
			country: '',
			city: ''
		};

		this.onCountryInputChange = this.onCountryInputChange.bind(this);
		this.onCityInputChange = this.onCityInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onFormSubmit(event) {
		event.preventDefault();
		this.setState({
			country: '', 
			city: '' 
		});
	}

	onCountryInputChange(event) {
		this.setState({ country: event.target.value });
	}

	onCityInputChange(event) {
		this.setState({ city: event.target.value });
	}

	render() {
		return (
			<div className="search-bar">
				<form className="form-inline" onSubmit={this.onFormSubmit}>
					<div className="form-group country-list">
				    	<div className="input-group">
				      		<div className="input-group-addon">Country</div>
				      		<input 
				      			type="text" 
				      			value={this.state.country}
				      			onChange={this.onCountryInputChange}
				      			className="form-control" 
			      			/>
				    	</div>
				  	</div>
					<div className="form-group city-bar">
				    	<div className="input-group">
				      		<div className="input-group-addon">City</div>
				      		<input 
								type="text"
								value={this.state.city}
								onChange={this.onCityInputChange}
								className="form-control"
							/>
				    	</div>
				  	</div>
					<div className="form-group">
						<div className="input-group">
							<button 
								type="submit" 
								className="btn btn-default">Search
							</button>
						</div>
					</div>
				</form>
			</div>		
		);
	}
}