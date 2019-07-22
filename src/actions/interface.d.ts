// todos object
export interface Todo {
  id: string;
  title: string;
}

//action creator
export interface GetTodosSuccess {
  todos: Todo[];
  type: GET_TODOS_SUCCESS;
}

// App props
export interface AppProps {
  todos: Todo[];
  getTodos: () => Promise<any>;
}

//App state
export interface AppState {
  isLoading: boolean;
}
