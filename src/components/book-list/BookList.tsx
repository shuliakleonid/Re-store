import React, {useEffect} from 'react';
import BookListItem from '../book-list-item/BookListItem';
import {BooksType} from '../pages/home-page/HomePage';
import {connect} from 'react-redux';
import {InitialStateType} from '../../reducers/reducer';
import {withBookstoreService} from '../hoc/with-bookstore-service';
import {compose} from 'redux';
import {BookstoreServiceType} from '../../services/bookstore-service';
import {booksLoaded} from '../../actions/books-loaded';

type BookListPropsType = {
  books: Array<BooksType>
  bookstoreService: BookstoreServiceType
  bookLoaded: (newBook: Array<BooksType>) => void
}

const BookList: React.FC<BookListPropsType> = ({books, bookstoreService, bookLoaded}) => {
  debugger
  useEffect(() => {
    //получить данные
    const data = bookstoreService.getBooks()
    console.log(data)
    //передать данные в стор
    bookLoaded(data)
  })

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

// export default withBookstoreService()(connect(mapStateToProps,{bookLoaded})(BookList));
export default compose<React.ComponentType>(
    connect(mapStateToProps,
        {booksLoaded}),
    withBookstoreService)(BookList)
