import React, { Component } from 'react';
import BookShelveChanger from './BookShelveChanger.js';

class Book extends Component {

    render() {
        const bookCoverStyle = {
            width: this.props.coverWidth || 128,
            height: this.props.coverHeight || 186,
            backgroundImage: `url(${this.props.book.imageLinks.smallThumbnail})`
        }

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={bookCoverStyle}/>
                    <BookShelveChanger book={this.props.book} changeShelveAction={this.props.changeShelveAction}/>
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">{this.props.book.authors[0]}</div>
            </div>
        )
    }
}

export default Book;