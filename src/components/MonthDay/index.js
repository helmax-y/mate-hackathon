import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ClassNames from 'classnames';

import { getTodos, getYear, getMonth } from '../../store';

const MonthDay = ({ date }) => {
  const history = useHistory();
  const todos = useSelector(getTodos);
  const year = useSelector(getYear);
  const month = useSelector(getMonth);
  const isThereEvent = todos.find(todo => todo.date === [date, month, year].join('-'));

  const tdClass = ClassNames(
    { table__td: true },
    { 'table__td--unactive': !date },
    { 'table__td--today': date === new Date().getDate() 
        && month ===  new Date().getMonth() + 1
        && year ===  new Date().getFullYear() },
    { 'table__td--event': isThereEvent }
  );

  return (
    <td 
      className={tdClass}
      onClick={() => date && history.push(`${date}-${month}-${year}`)}
    >
      {date}
    </td>
  );
};

export default MonthDay;