import { createStore } from 'redux';

const HANDLE_ADD = 'HANDLE_ADD';

export const handleAdd = todo => ({
  type: HANDLE_ADD,
  todo,
});

export const getTodos = state => state.todos;

const initialState = {
  todos: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case HANDLE_ADD:
      return {
        ...state,
        todos: [...state.todos, action.todo],
      };

    default:
      return state;
  }
};

const store = createStore(reducer, initialState);

export default store;
