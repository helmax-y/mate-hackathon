import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import './day.scss';
import monthesAccord from '../monthesAccord';

const hours = [...Array(24).keys()];
// const date = new Date();
// date.setMonth(date.getMonth() - 1);

const Day = () => {
  const location = useLocation();
  const date = location.pathname.slice(1).split('-');  

  return (
    <div className="day">
      <Link to="/">Back to month</Link>
      <h2 className="day__date">
        {date[0]} {monthesAccord[date[1]]} {date[2]}
      </h2>
      {/* <h2 className="day__weekday">Saturday</h2> */}
      {hours.map(hour => (
        <div className="day__hour">{`${hour}:00`}</div>
      ))}
    </div>
  );
};

export default Day;
