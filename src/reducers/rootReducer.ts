import {combineReducers} from "redux";

// The reducers
import todos from './todosReducer';

export const rootReducer = combineReducers({
  todos
});
