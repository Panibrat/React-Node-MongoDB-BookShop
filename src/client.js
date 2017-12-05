"use strict"
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';

import {BrowserRouter, Route, Switch} from 'react-router-dom';


import reducers from './reducers/index';

import {addToCart, deleteCartItem} from './actions/cartActions';
import {postBooks, deleteBooks, updateBooks} from './actions/booksActions';

import BooksList from './components/pages/booksList';
import BooksForm from './components/pages/booksForm';
import Cart from './components/pages/cart';
import Menu from './components/menu';
import Footer from './components/footer';


const middeleware = applyMiddleware(thunk, logger);
const store = createStore(reducers, middeleware);
store.subscribe(function() {
  //console.log('current state is: ', store.getState());
});

const Routes = (
  <Provider store = {store} >
    <BrowserRouter>
      <div>
        <Menu />
          <Switch>
            <Route exact path="/" component={BooksList}/>
            <Route path="/admin" component={BooksForm}/>
            <Route path="/cart" component={Cart}/>
          </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  </Provider>
);

render(Routes, document.getElementById('app')
);
