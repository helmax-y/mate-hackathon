import React from 'react';
import { NavLink } from 'react-router-dom';

import './tabs.scss';

const Tabs = () => {
  return (
    <section className="tabs">
      <NavLink className="tabs__tab" to="month">Month</NavLink>
      <NavLink className="tabs__tab" to="week">Week</NavLink>
      <NavLink className="tabs__tab" to="19-1-2020">Today</NavLink>
    </section>
  );
};

export default Tabs;