import { combineReducers } from 'redux';
// import { connectRouter } from 'connected-react-router/immutable';
// import history from 'utils/history';

import user from './user';
import locales from './locales';

export default function createReducer() {
  const rootReducer = combineReducers({
    user,
    locales,
  });
  // const mergeWithRouterState = connectRouter(history);
  // return mergeWithRouterState(rootReducer);
  return rootReducer;
}
