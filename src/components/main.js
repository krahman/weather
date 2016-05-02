import React from 'react';
import { Component } from 'react';

import SearchBar from './search_bar';

export default class MainApp extends Component {
	render() {
		return (
			<div>
				<h1 className="container-title">World Weather</h1>
				<p>Get five days weather forcast in your favorite cities</p>
				<SearchBar />
			</div>	
		);
	}
}