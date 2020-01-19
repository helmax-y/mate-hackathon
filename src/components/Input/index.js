import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import ClassNames from 'classnames';

import './checkbox.scss';
import { getTodos, toggleImportance, addTodo, deleteTodo } from '../../store';

const Input = ({ hour }) => {
  const [input, setInput] = useState('');
  const location = useLocation();
  const todos = useSelector(getTodos);
  const dispatch = useDispatch();

  const isThereEvent = todos.find(todo => todo 
    && todo.date === location.pathname.slice(1)
    && todo.hour === hour);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (input) {
      dispatch(addTodo({
        date: location.pathname.slice(1),
        hour,
        body: input.trim(),
        isImportant: false,
      }));
    }
  };

  const editEvent = (event) => {
    if (event.target.value) {
      dispatch(deleteTodo(location.pathname.slice(1), event.target.value, hour));
    }
    setInput('');
  };  

  const inputClass = ClassNames(
    { day__input: true },
    { 'day__input--event': isThereEvent }
  );

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={inputClass}
        type="text"
        value={(isThereEvent && isThereEvent.body) || input}
        onChange={event => setInput(event.target.value)}
        onDoubleClick={editEvent}
      />
      {/* {isThereEvent && (
        <label>
          {isThereEvent.isImportant
            ? 'Important'
            : 'Is it important?'}
          <input 
            className="checkbox"
            type="checkbox" 
            checked={isThereEvent.isImportant}
            onChange={event => dispatch(toggleImportance(
              isThereEvent.date,
              hour,
              event.target.checked
            ))}
          />
        </label>
      )} */}
    </form>
  );
};

export default Input;
