import React from 'react';
import { Component } from 'react';

import CountryList from './country_list';
import CityInput from './city_input';

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
					<CountryList country={this.state.country} onCountryInputChange={this.onCountryInputChange}/>
					<CityInput city={this.state.city} onCityInputChange={this.onCityInputChange}/>
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