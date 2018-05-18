import {
  combineReducers,
  createStore,
  applyMiddleware
} from 'redux';
import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router';
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware,
  push
} from 'react-router-redux';
import {
  persistStore,
  persistReducer
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import ShoppingCart from '../reducers/ShoppingCart';
import productsData from '../../../data';

const persistConfig={
  key: 'root',
  storage
};

const rootReducer=combineReducers({
  ShoppingCart,
  router: routerReducer
});

const persistedReducer=persistReducer(persistConfig, rootReducer);

const configureStore=(middleware) => {
  const store=createStore(
    persistedReducer,
    applyMiddleware(middleware)
  );

  let persistor=persistStore(store);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer=require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return {
    store,
    persistor
  };
};

export default configureStore;
