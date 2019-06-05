import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router/immutable';

// import createSagaMiddleware from 'redux-saga';
import createReducer from './reducer';

// const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState = {}, history) {
  //   const middlewares = [sagaMiddleware];
  const middlewares = [routerMiddleware(history)];
  const enhancers = applyMiddleware(...middlewares);
  const store = createStore(createReducer(), enhancers);

  //Extensions
  //   store.runSaga = sagaMiddleware.run;
  return store;
}
