import React from 'react';
import {withBookstoreService} from '../hoc/with-bookstore-service';

const App:React.FC<any> = ({bookstoreService}) => {
  console.log(bookstoreService.getBooks)
  return (
      <div>
        App
      </div>
  );
};

export default withBookstoreService()(App);
