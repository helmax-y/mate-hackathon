import { createStore } from 'redux';

const initialState = {
  todos: [],
  currentYear: 2020,
  currentMonth: new Date().getMonth() + 1,
};

const ADD_TODO = 'ADD_TODO';
const TOGGLE_IMPORTANCE = 'TOGGLE_IMPORTANCE';
const DELETE_TODO = 'DELETE_TODO';
const SET_YEAR = 'SET_YEAR';
const SET_MONTH = 'SET_MONTH';

export const getTodos = state => state.todos;
export const getYear = state => state.currentYear;
export const getMonth = state => state.currentMonth;

export const addTodo = payload => ({
  type: ADD_TODO,
  payload,
});

export const toggleImportance = (date, hour) => ({
  type: TOGGLE_IMPORTANCE,
  date,
  hour
});

export const deleteTodo = (date, body, hour) => ({
  type: DELETE_TODO,
  date,
  body,
  hour,
});

export const setYear = payload => ({
  type: SET_YEAR,
  payload,
});

export const setMonth = payload => ({
  type: SET_MONTH,
  payload
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

    case TOGGLE_IMPORTANCE:            
      return {
        ...state,
        todos: state.todos.map(todo => todo.date === action.date
          && todo.hour === action.hour
          ? {
            ...todo,
            isImportant: !todo.isImportant,
          }
          : todo),
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.date !== action.date
          || todo.body !== action.body || todo.hour !== action.hour),
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
