import React from 'react';
import { useHistory } from 'react-router-dom';
import ClassNames from 'classnames';

const MonthDay = ({ todos, date, month, year }) => {
  const history = useHistory();

  const tdClass = ClassNames(
    { table__td: true },
    { 'table__td--unactive': !date },
    { 'table__td--today': date === new Date().getDate() 
        && month ===  new Date().getMonth() + 1
        && year ===  new Date().getFullYear() },
    // { 'table__td--event': todos.find(todo => todo.date === [date, month, year]) }
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