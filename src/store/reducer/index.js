import { combineReducers } from 'redux';
// import { connectRouter } from 'connected-react-router/immutable';
// import history from 'utils/history';

import user from './user';

export default function createReducer() {
  const rootReducer = combineReducers({
    user,
  });
  // const mergeWithRouterState = connectRouter(history);
  // return mergeWithRouterState(rootReducer);
  return rootReducer;
}
