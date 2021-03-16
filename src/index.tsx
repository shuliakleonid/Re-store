import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import store from './store';
import { Provider } from 'react-redux'
import ErrorBoundary from './components/error-boundary/error-boundary';
import {BookstoreServiceProvider} from './components/book-service-context/book-services-context';
import {BrowserRouter as Router} from 'react-router-dom'
import BookstoreService from './services/bookstore-service';

const bookstoreService = new BookstoreService()
ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <ErrorBoundary>
          <BookstoreServiceProvider value={bookstoreService}>
            <Router>
              <App/>
            </Router>
          </BookstoreServiceProvider>
        </ErrorBoundary>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
