import React from 'react';
import BookList from '../../book-list/BookList';

export interface BooksType {
  id: number
  title: string
  author: string
  price: number
  coverImage: string
}

const HomePage = () => {
  debugger
  return <div><BookList/></div>
};

export default HomePage;
