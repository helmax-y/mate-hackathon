import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './day.scss';
import monthesAccord from '../monthesAccord';
import Input  from '../Input';
import { getTodos } from '../../store';

const hours = [...Array(24).keys()];

const Day = () => {
  console.log(getTodos);

  const todos = useSelector(getTodos);
  const location = useLocation();
  const date = location.pathname.slice(1).split('-');

  const isThereEvent = todos.find(todo => todo.date === location.pathname.slice(1));
  const isImportant = isThereEvent && isThereEvent.isImportant;

  return (
    <div className="day">
      <h2 className="day__date">
        {date[0]} {monthesAccord[date[1]]} {date[2]}
      </h2>
      <div className="day__content">
        {hours.map(hour => (
          <div
              className="day__hour"
              key={hour}
          >
            <span className="day__hour-text">{`${hour}:00`}</span>
            <Input hour={hour} />
              <div className="labels">
                <label className="label--important">Important
                  <input
                    type="checkbox"
                    checked={isImportant}
                  />
                </label>

                <select
                    className="label--todo-type"
                  // onChange={}
                >
                  <option value="">work</option>
                  <option value="">personal</option>
                </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Day;
