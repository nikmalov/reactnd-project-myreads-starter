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
                                    <Book book={book} changeShelveAction={this.props.changeShelveAction}/>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
        )
    }
}

export default BookShelve;