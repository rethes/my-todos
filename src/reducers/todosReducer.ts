//imports
import {GET_TODOS_SUCCESS} from '../actions/todoAction';

const reducer = (state = {}, action: {type: string; [key: string]: any; }) => {
  switch (action.type) {
    case GET_TODOS_SUCCESS:
      return {
        ...state,
        data: action.todos,
      };
    // add swith case for failure
    default:
      return state;
  }
};

export default reducer;