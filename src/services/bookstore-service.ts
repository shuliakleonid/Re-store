import {BooksType} from '../components/pages/home-page/HomePage';

export interface BookstoreServiceType{
  getBooks():Array<BooksType>
}

export default class BookstoreService implements BookstoreServiceType {

  getBooks() {
    return [
      {id:1,
      title:'kldhf;hfd',
      author:'kdlfj;alsjfkds;'},
      {id:2,
      title:'kldsfds',
      author:'kdfdskds;'},
    ];
  }

}
