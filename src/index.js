import 'babel-polyfill';
import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import { Provider } from 'react-redux';
import {
  combineReducers,
  createStore,
  applyMiddleware
} from 'redux';
import createHistory from 'history/createBrowserHistory';
import {
  Route,
  Switch
} from 'react-router';
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware,
  push
} from 'react-router-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './js/store';
import productsData from '../data';
import App from './js/components/App';
import Cart from './js/components/Cart';
import rootReducer from './js/reducers/ShoppingCart';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/normalize.css';
import './css/shopping-cart-app.css';

const history=createHistory();

const middleware=routerMiddleware(history);

const { store, persistor }=configureStore(middleware);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" component={App}/>
          <Route path="/cart-show" component={Cart} />
        </Switch>
      </ConnectedRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
