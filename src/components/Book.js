import React, { Component } from 'react';
import BookShelveChanger from './BookShelveChanger.js';

class Book extends Component {

    render() {
        const bookCoverStyle = {
            width: this.props.coverWidth || 128,
            height: this.props.coverHeight || 186,
            backgroundImage: `url(${this.props.coverUrl})`
        }

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={bookCoverStyle}/>
                    <BookShelveChanger />
                </div>
                <div className="book-title">{this.props.title}</div>
                <div className="book-authors">{this.props.author}</div>
            </div>
        )
    }
}

export default Book;