import React from 'react';
import BookListItem from '../book-list-item/BookListItem';
import {BooksType} from '../pages/home-page/HomePage';
import {connect} from 'react-redux';
import {InitialStateType} from '../../reducers/reducer';

type BookListPropsType = {
  books: Array<BooksType>
}

const BookList: React.FC<BookListPropsType> = ({books}) => {

  const book = books.map((book) => {
    return <li key={book.id}><BookListItem book={book}/></li>
  })
  debugger
  return (
      <ul>
        {book}
      </ul>
  );
};

const mapStateToProps = (state: InitialStateType): BookListPropsType => {
  return {
    books: state.books
  }
}

export default connect(mapStateToProps)(BookList);
