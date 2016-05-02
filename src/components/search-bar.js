import React from 'react';
import { Component } from 'react';

export default class SearchBar extends Component {
	render() {
		return (
			<div className="search-bar">
				<form className="form-inline">
					<div className="form-group">
						<input type="text" className="form-control"/>
					</div>
					<button type="submit" className="btn btn-default">Search</button>
					
				</form>
			</div>		
		);
	}
}