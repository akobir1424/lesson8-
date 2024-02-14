import { combineReducers, createStore, applyMiddleware } from 'redux';
import userReducer from './users/user.Reducer';


const rootReducer = combineReducers({

  users: userReducer,
});

const store = createStore(
  rootReducer
);

export default store;