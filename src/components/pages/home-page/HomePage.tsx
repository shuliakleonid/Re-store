import React from 'react';
import BookList from '../../book-list/BookList';

export interface BooksType  {
  id: number
  title: string
  author: string
}

const HomePage = () => {
  // const books:Array<BooksType> = [
  //   {
  //     id: 1,
  //     title: 'kldhf;hfd',
  //     author: 'kdlfj;alsjfkds;'
  //   },
  //   {
  //     id: 2,
  //     title: 'kldsfds',
  //     author: 'kdfdskds;'
  //   },
  // ];
  return (
      <div><BookList /></div>
  );
};

export default HomePage;
