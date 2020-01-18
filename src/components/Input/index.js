import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const URL = 'https://my-json-server.typicode.com/helmax-y/mate-hackathon/todos';

const Input = ({ hour, todos }) => {
  const location = useLocation();
  const [input, setInput] = useState('');

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(URL, {
      method: 'POST',
      body: JSON.stringify([
        ...todos,
        {
          date: location.pathname.slice(1).split('-'),
          hour: hour,
          body: input,
        },
      ]),
      headers: {
        'Content-Type': 'application/json'
      },
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
  );
};

export default Input;
