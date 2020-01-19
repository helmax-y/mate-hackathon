import React from 'react';
import { useLocation } from 'react-router-dom';

import './day.scss';
import monthesAccord from '../monthesAccord';
import Input  from '../Input'

const hours = [...Array(24).keys()];

const Day = () => {
  const location = useLocation();
  const date = location.pathname.slice(1).split('-');

  return (
    <div className="day">
      <h2 className="day__date">
        {date[0]} {monthesAccord[date[1]]} {date[2]}
      </h2>
      {hours.map(hour => (
        <div key={hour} className="day__hour">
          {`${hour}:00`}
          <Input hour={hour} />
        </div>
      ))}
    </div>
  );
};

export default Day;
