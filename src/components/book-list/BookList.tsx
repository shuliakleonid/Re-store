import React from 'react';
import BookListItem from '../book-list-item/BookListItem';
import {BooksType} from '../pages/home-page/HomePage';

type BookListPropsType = {
  books:Array<BooksType>
}

const BookList:React.FC<BookListPropsType> = ({books}) => {

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

export default BookList;
