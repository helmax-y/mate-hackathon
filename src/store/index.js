import { createStore } from 'redux';

const initialState = {
  todos: [],
  currentYear: 2020,
  currentMonth: new Date().getMonth() + 1,
};

const ADD_TODO = 'ADD_TODO';
const SET_YEAR = 'SET_YEAR';
const SET_MONTH = 'SET_MONTH';

export const getTodos = state => state.todos;
export const getYear = state => state.currentYear;
export const getMonth = state => state.currentMonth;

export const addTodo = payload => ({
  type: ADD_TODO,
  payload,
});

export const setYear = payload => ({
  type: SET_YEAR,
  payload,
});

export const setMonth = payload => ({
  type: SET_MONTH,
  payload,
});


const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          action.payload,
        ],
      };

    case SET_YEAR:
      return {
        ...state,
        currentYear: action.payload,
      };

    case SET_MONTH:
      return {
        ...state,
        currentMonth: action.payload,
      };

    default:
      return state;
  }
};

const store = createStore(reducer, initialState);

export default store;
