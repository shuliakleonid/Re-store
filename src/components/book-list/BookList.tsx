import React, {useEffect} from 'react';
import BookListItem from '../book-list-item/BookListItem';
import {BooksType} from '../pages/home-page/HomePage';
import {connect} from 'react-redux';
import {InitialStateType} from '../../reducers/reducer';
import {booksLoaded} from '../../actions/books-loaded';
import './BookList.css'

type BookListPropsType = {
  books: Array<BooksType>
  // bookstoreService: BookstoreServiceType
  // bookLoaded: (newBook: Array<BooksType>) => void
}

const BookList: React.FC<BookListPropsType> = ({books}) => {
  debugger
  useEffect(() => {
    //получить данные
    // const data = bookstoreService.getBooks()
    // console.log(data)
    //передать данные в стор
    // bookLoaded(data)
  }, [])
  const book = books.map((book) => {
    return <li key={book.id}><BookListItem book={book}/></li>
  })
  return (

      <ul className='book-list'>
        {book}
      </ul>
  );
};

const mapStateToProps = (state: InitialStateType) => {
  return {
    books: state.books
  }
}
// const mapDispatchToProps = (dispatch: Dispatch) => {
//   return {
//     bookLoaded: (newBook: string) => dispatch(booksLoaded(newBook))
//   }
// }

export default connect(mapStateToProps, {booksLoaded})(BookList);
// export default compose<React.ComponentType>(
//     connect(mapStateToProps, {booksLoaded}),
//     withBookstoreService)(BookList)
