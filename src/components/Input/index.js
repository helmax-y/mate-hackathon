import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import ClassNames from 'classnames';

import { getTodos, addTodo } from '../../store';

const Input = ({ hour }) => {
  const [input, setInput] = useState('');
  const location = useLocation();
  const todos = useSelector(getTodos);
  const dispatch = useDispatch();

  const isThereEvent = todos.find(todo => todo.date === location.pathname.slice(1)
    && todo.hour === hour);

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(addTodo({
      date: location.pathname.slice(1),
      hour,
      body: input.trim(),
    }));
  };

  const inputClass = ClassNames(
    { day__input: true },
    { 'day__input--event': isThereEvent }
  )

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={inputClass}
        type="text"
        value={(isThereEvent && isThereEvent.body) || input}
        onChange={event => setInput(event.target.value)}
      />
    </form>
  );
};

export default Input;
