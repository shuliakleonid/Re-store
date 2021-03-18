import React from 'react';
import CartPage from '../pages/cart-page/CartPage';
import {Route, Switch} from 'react-router-dom'
import HomePage from '../pages/home-page/HomePage';
import Header from '../pages/header/Header';
import ShoppingCartTable from '../shopping-cart-table/ShoppingCartTable';


const App: React.FC = () => {
  return (
      <main role='main' className='container'>
        <Header numItems={5} total={210}/>
        <Switch>
          <Route exact path='/' render={() => <HomePage/>}/>
          <Route path='/cart' render={() => <CartPage/>}/>
        </Switch>
        <ShoppingCartTable/>
      </main>
  );
};

export default App;
