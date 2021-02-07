import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelve from './components/BookShelve.js'
import { Route, Link } from 'react-router-dom'

const statusWantToRead = "wantToRead"
const statusReading = "currentlyReading"
const statusRead = "read"


class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) =>
      this.setState(() => ({
        books
      }))   
    )
  }

  //todo: issue with updating the same book twice in a row
  updateBook = (book, shelve) => {
    console.log(`${book.title} to shelve ${shelve}`);
    const alteredBook = book
    alteredBook.shelf = shelve
    let newList = this.state.books.filter( item => item !== book ).concat(alteredBook)
    this.setState(() => ({ 
      books: newList
    }))
    BooksAPI.update(book, shelve)
  }

  render() {
    console.log(this.state.books);
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <BookShelve shelveTitle="Currently Reading" changeShelveAction={this.updateBook} booksList={this.state.books.filter(it => it.shelf === statusReading)} />
              <BookShelve shelveTitle="Want to Read" changeShelveAction={this.updateBook} booksList={this.state.books.filter(it => it.shelf === statusWantToRead)} />
              <BookShelve shelveTitle="Read" changeShelveAction={this.updateBook} booksList={this.state.books.filter(it => it.shelf === statusRead)} />
            </div>
            <Link to='/add' className="open-search">Add a book</Link>
          </div>
        )}/>
        <Route path='/add' render={() => (
          <div className="search-books">
            <div className="search-books-bar">
              <Link to='/' className="close-search">Close</Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        )}/>
      </div>
    )
  }
}

export default BooksApp
