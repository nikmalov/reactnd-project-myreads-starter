import React, { Component } from 'react'
import Book from './Book.js'

class BookShelve extends Component {
    render() {
        return (
            <div className="bookshelf">
                  <h2 className="bookshelf-title">{this.props.shelveTitle}</h2>
                  <div className="bookshelf-books">
                        <ol className="books-grid">
                            {this.props.booksList.map(book => (
                                <li key={book.id}>
                                    <Book 
                                        title={book.title}
                                        author={book.authors[0]}
                                        coverUrl={book.imageLinks.smallThumbnail}/>
                                </li>          
                            ))}
                        </ol>
                    </div>
                </div>
        )
    }
}

export default BookShelve;