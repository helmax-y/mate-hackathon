import React from 'react';
import './week.scss';

const hours = [...Array(24).keys()];
const preparedHours = hours.map(hour => [`${hour}:00`, ...Array(7)]);
const dates = [13, 14, 15, 16, 17, 18, 19]//this must be in props?
const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const Week = () => (
  <div className="week-wrapper">
    <h1>January 2020</h1>
    <table className="week-table">
      <thead>
      <tr>
        <th></th>
        {dates.map((date, i) => (
          <th key={date}>{weekDays[i]} {date}</th>
        ))}
      </tr>
      </thead>
      <tbody>
      {preparedHours.map(row => (
          <tr
              className="week-table__row"
          >
            {row.map(cell => (
                <td
                    className="week-table__cell"
                >{cell}
                </td>
            ))}
          </tr>
      ))}
      </tbody>
    </table>
  </div>
);

export default Week;
