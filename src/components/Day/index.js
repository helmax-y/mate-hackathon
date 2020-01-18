import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleAdd } from '../../store';

import './day.scss';
import monthesAccord from '../monthesAccord';

const hours = [...Array(24).keys()];

const Day = ( {handleAdding }) => {
  const location = useLocation();
  const date = location.pathname.slice(1).split('-');
  const [input, setInput] = useState('');

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    handleAdding({
        id: +new Date(),
        body: input,
      });
  };

  return (
    <div className="day">
      <h2 className="day__date">
        {date[0]} {monthesAccord[date[1]]} {date[2]}
      </h2>
      {hours.map(hour => (
        <div className="day__hour">{`${hour}:00`}
          <form onSubmit={handleSubmit}>
            <input
                className="new-todo"
                type="text"
                value={input}
                onChange={handleInputChange}
            />
          </form>
        </div>
      ))}
    </div>
  );
};

export default connect(null, { handleAdding: handleAdd })(Day);
