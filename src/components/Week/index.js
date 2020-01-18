import React from 'react';
import './week.scss';

const hours = [...Array(24).keys()];
console.log(hours);
const preparedHours = hours.map(hour => [`${hour}:00`, ...Array(7)]);
console.log(preparedHours);
const dates = [24, 25, 26, 27, 28, 29, 1]//this must be in props?
const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const Week = () => (
    <div className="week-wrapper">
      <h1>Month YEAR</h1>
      <table className="week-table">
        <thead>
        <tr>
          <th></th>
          {dates.map((date, i) => (
              <th>{weekDays[i]} {date}</th>
          ))}
        </tr>
        </thead>
        <tbody>
        {preparedHours.map(row => (
            <tr className="week-table__row">
              {row.map(cell => (
                  <td className="week-table__cell">{cell}</td>
              ))}
            </tr>
        ))}
        </tbody>
      </table>
    </div>
);

export default Week;
