//imports
import {GetTodosSuccess, Todo} from './interface';
import data from '../data/todos.json';

//types
export const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS';

//action creators
export const getTodosSuccess = (todos: Todo[]): GetTodosSuccess => ({
  todos,
  type: GET_TODOS_SUCCESS
});

// redux thunk for todos

export const getTodos = () => {

  return (dispatch: (arg0: GetTodosSuccess) => void) => {
    const response = data;
    if (response.status === 200) {
      console.log("data.todos", data.todos)
      dispatch(getTodosSuccess(data.todos));
    } else {
      // dispatch failure action creator
    }
  };
};
