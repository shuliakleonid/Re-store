import React from 'react';
import {withBookstoreService} from '../hoc/with-bookstore-service';
import CartPage from '../pages/cart-page/CartPage';
import {Switch,Route} from 'react-router-dom'
import HomePage from '../pages/home-page/HomePage';
const App:React.FC<any> = () => {
  return (
      <div>
<Switch>
  <Route exact path='/' render ={() => <HomePage/>}/>
  <Route path='/cart' render ={() => <CartPage/>}/>

</Switch>
      </div>
  );
};

export default withBookstoreService()(App);
