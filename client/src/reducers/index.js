import { combineReducers } from 'redux';
import questionReducer from './questionReducer.js';
import optionReducer from './optionReducer';
import userReducer from './userReducer';

export default combineReducers({
  questions: questionReducer,
  options: optionReducer,
  users: userReducer
});