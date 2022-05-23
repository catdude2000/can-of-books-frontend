/**
 * @file Books.js
 */
import React from 'react';


class Books extends React.Component{
  render(){
    return(
      <>
      {this.props.books.length && 
        this.props.books.map((book, index) => {
        return (
          <div key={index}>
            {book.name} in {book.location}
          </div>
        );
        
        }        
      )}
      </>
    );
  }
}

export default Books;
