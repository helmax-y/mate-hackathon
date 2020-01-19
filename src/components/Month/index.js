import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

import './title.scss';
import './table.scss';
import monthesAccord from '../monthesAccord';
import MonthDay from '../MonthDay';

const date = new Date();

const getLocalDay = date => {
  let day = date.getDay();

  if (day === 0) {
    day = 7;
  }

  return day;
};

const Month = () => {
  const [year, setYear] = useState(date.getFullYear());
  const [month, setMonth] = useState(date.getMonth() + 1);

  const monthLength = new Date(year, month, 0).getDate();
  const monthStartDay = getLocalDay(new Date(year, month - 1));
  const startArr = Array(monthStartDay - 1);
  const monthEndDay = getLocalDay(new Date(year, month - 1, monthLength));
  const endArr = Array(7 - monthEndDay);
  const daysArr = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
  const middleArr = Array.from(Array(monthLength).keys()).map(date => date + 1);
  const datesArr = [...startArr, ...middleArr, ...endArr];

  const decrease = () => {
    if (month === 1) {
      setYear(year - 1);
      setMonth(12);
    } else {
      setMonth(month - 1);
    }
  };

  const increase = () => {
    if (month === 12) {
      setYear(year + 1);
      setMonth(1);
    } else {
      setMonth(month + 1);
    }
  };

  return (
    <>
      <section className="nav">
        <Button 
          variant="outlined"
          type="button"
          onClick={decrease}
        >
          &lt;--
        </Button>
  
        <h2 className="nav__title">
          {monthesAccord[month]} {year}
        </h2>
  
        <Button 
          variant="outlined"
          type="button"
          onClick={increase}
        >
          --&gt;
        </Button>
      </section>

      <table className="table">
        <thead>
          <tr>
            {daysArr.map(day => (
              <th key={day} className="table__th">{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {datesArr.slice(0, 7).map(date => (
              <MonthDay 
                date={date}
                month={month}
                year={year}
              />
            ))}
          </tr>
          <tr>
            {datesArr.slice(7, 14).map(date => (
              <MonthDay 
                date={date}
                month={month}
                year={year}  
              />
            ))}
          </tr>
          <tr>
            {datesArr.slice(14, 21).map(date => (
              <MonthDay 
                date={date}
                month={month}
                year={year}  
              />
            ))}
          </tr>
          <tr>
            {datesArr.slice(21, 28).map(date => (
              <MonthDay 
                date={date}
                month={month}
                year={year}  
              />
            ))}
          </tr>
          <tr>
            {datesArr.slice(28, 35).map(date => (
              <MonthDay 
                date={date}
                month={month}
                year={year}  
              />
            ))}
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Month;
