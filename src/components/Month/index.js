import React from 'react';
import { connect } from 'react-redux';
import './month.scss';
import { selectDates } from '../../store';

const Month = (dates) => {
  console.log(dates);
  console.log(dates.dates);
  

  return (
    <>
      <h2 className="title">January 2020</h2>
      
      <article className="month">
        {['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'].map(weekday => (
          <section className="month__week-day">
            {weekday}
          </section>
        ))}
        {dates.dates.map(({ date }) => (
          <section className="month__day">
            {date}
          </section>
        ))}
      </article>
    </>
  )
};

const mapStateToProps = state => ({
  dates: selectDates(state),
});

export default connect(mapStateToProps)(Month);