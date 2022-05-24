import React from 'react';
import axios from 'axios';
import BooksForm from './BooksForm';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

 
  // TODO: Make a GET request to your API to fetch all the books from the database

  fetchBooks = async (location = null) => {
    const SERVER='http://localhost:3001'
    let apiURL = `${SERVER}/books`;
    if(location){
      apiURL += `?location=${location}`
    }
    try {
      const response = axios.get(apiURL)
      this.setState({books: response.data})
    } catch (error) {
      console.error(error);
      
    }
  }
  componentDidMount(){
    this.fetchBooks();
  }

  handleLocationSubmit = (evt) => {
    evt.preventDefault();
    const location = evt.target.location.value;
    console.log(`App.handleLocationSubmit() location: ${location}`);
    this.fetchBooks(location);
  };

  render() {

    // TODO: render all the books in a Carousel

    return (
      <>
        <BooksForm book={this.state.books} fetchBooks={this.fetchBooks}/>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
          <p>Book Carousel coming soon</p>
        ) : (
          <h3>No Books Found :</h3>
        )}
      </>
    )
  }
}

export default BestBooks;
