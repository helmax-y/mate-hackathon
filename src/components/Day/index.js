import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ClassNames from 'classnames';

import Input  from '../Input'
import { connect } from 'react-redux';
import { getTodos } from '../../store';

import './day.scss';
import monthesAccord from '../monthesAccord';

const hours = [...Array(24).keys()];

const Day = ({ todos }) => {
  const location = useLocation();
  const date = location.pathname.slice(1).split('-');

  const dayClass = ClassNames(
    { day__hour: true },
    // { 'day__hour--event': true }
  );

  return (
    <div className="day">
      <h2 className="day__date">
        {date[0]} {monthesAccord[date[1]]} {date[2]}
      </h2>
      <div className="day__content">
        {hours.map(hour => (
          <div className={dayClass}>
            <span className="day__hour-text">{`${hour}:00`}</span>
            <Input hour={hour} />
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  todos: getTodos(state),
});

export default connect(mapStateToProps, null)(Day);
