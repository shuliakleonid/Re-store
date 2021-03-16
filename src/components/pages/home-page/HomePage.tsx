import React from 'react';
import BookList from '../../book-list/BookList';

export interface BooksType {
  id: number
  title: string
  author: string
}

const HomePage = () => {


  return (
      <div><BookList/></div>
  );
};

export default HomePage;
