import { combineReducers } from 'redux';

import AccountReducer from './AccountReducer';

import NotificationReducer from './NotificationReducer';

const RootReducer = combineReducers({
  account: AccountReducer,
  notifications: NotificationReducer,
});

export default RootReducer;
