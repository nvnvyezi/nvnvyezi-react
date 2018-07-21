import { createStore, applyMiddleware } from "redux";
// import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from './middleware/promiseMiddleware';

import combineReducers from './reducers';

let store = createStore(combineReducers, applyMiddleware(promiseMiddleware));

export default store;