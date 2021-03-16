import React from 'react';
import {BooksType} from '../pages/home-page/HomePage';
type BookListItemPropsType = {
  book:BooksType
}

const BookListItem:React.FC<BookListItemPropsType> = ({ book }) => {
  debugger
  const {title, author} = book
  return (
      <div>
        <span>{title}</span><span>{author}</span>
      </div>
  );
};

export default BookListItem;
