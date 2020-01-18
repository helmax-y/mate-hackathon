import React from 'react';
import './day.scss';

const hours = [...Array(24).keys()];

const Day = () => (
    <div className="day">
      <h1 className="day__heading">Day month year</h1>
      <h2 className="day__subheading">Weekday</h2>
      {hours.map(hour => <div className="day__hour">{`${hour}:00`}</div>)}
    </div>
);

export default Day;
