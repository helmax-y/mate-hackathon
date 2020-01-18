import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleAdd } from '../../store';
import { getTodos } from '../../store';


const Input = ( {handleAdding, hour, todos }) => {
  const location = useLocation();
  const [input, setInput] = useState('');

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    handleAdding({
      date: location.pathname,
      hour: hour,
      body: input,
    });
  };

  return (
      <form onSubmit={handleSubmit}>
        <input
            className="new-todo"
            type="text"
            value={input}
            onChange={handleInputChange}
        />
      </form>
  )};

const mapStateToProps = state => ({
  todos: getTodos(state),
});

export default connect(mapStateToProps, { handleAdding: handleAdd })(Input);
