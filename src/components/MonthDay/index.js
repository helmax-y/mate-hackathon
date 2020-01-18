import React from 'react';
import { useHistory } from 'react-router-dom';
import ClassNames from 'classnames';

const MonthDay = ({ date, month, year }) => {
  const history = useHistory();

  const tdClass = ClassNames(
    { table__td: true },
    { 'table__td--unactive': !date }
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