import { combineReducers } from 'redux';
import questionReducer from './questionReducer.js';
import optionReducer from './optionReducer';
import userReducer from './userReducer';
import voteReducer from './voteReducer';
import navbarReducer from './navbarReducer';

export default combineReducers({
  questions: questionReducer,
  options: optionReducer,
  users: userReducer,
  votes: voteReducer,
  navbar: navbarReducer
});