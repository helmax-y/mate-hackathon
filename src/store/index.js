import { createStore } from 'redux';

const initialState = {
  todos: [],
};

const ADD_TODO = 'ADD_TODO';

export const addTodo = todo => ({
  type: ADD_TODO,
  todo,
});

export const getTodos = state => state.todos;

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          action.todo,
        ],
      };

    default:
      return state;
  }
};

const store = createStore(reducer, initialState);

export default store;
