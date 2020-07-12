import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import AccountReducer from './reducers/AccountReducer';

const Store = createStore(AccountReducer, applyMiddleware(thunk));

export default Store;
