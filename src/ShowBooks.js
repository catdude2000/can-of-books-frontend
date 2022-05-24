/**
 * @file ShowBooks.js
 * @authors @catdude2000 @Jacks-01
 * @description 
 */
import React from 'react';
import Books from './Books';

class ShowBooks extends React.Component {
	handleSubmission = (evt) => {
		evt.preventDefault();
		const location = evt.target.location.value;
		console.log(location, 'location');
		this.props.fetchBooks(location);
	};

	render() {
		return (
			<div>
				<Books book={this.props.book} />
				<h1>filter by location</h1>
				<form onSubmit={this.handleSubmission}>
					<input name="location" />
					<button>enter</button>
				</form>
			</div>
		);
	}
}

export default ShowBooks;
