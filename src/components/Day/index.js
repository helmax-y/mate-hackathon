import React from 'react';

const hours = [...Array(24).keys()];
const date = new Date();
console.log(date);
date.setMonth(date.getMonth() - 1);
console.log(date);

console.log(hours);

const Day = () => (
    <div className="day">
    <h1 className="day__date">Jan 18, 2020</h1>
    <h2 className="day__weekday">Saturday</h2>
      {hours.map(hour => (
          <div className="day__hour">{`${hour}:00`}</div>
      ))}
    </div>
);

export default Day;
