import { createStore } from 'redux';
import preparedData from '../preparedData';

const initialState = {
  calendar: preparedData,
  currentMonth: 1,
};

export const selectDates = state => {
  const activeMonth = state.calendar
    .find(month => month.id === state.currentMonth);

  return activeMonth.dates;
};

const rootReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default createStore(rootReducer, initialState);