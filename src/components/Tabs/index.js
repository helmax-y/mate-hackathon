import React from 'react';
import { NavLink } from 'react-router-dom';

import './tabs.scss';

const Tabs = () => {
  return (
    <section className="tabs">
      <NavLink
        activeClassName="tabs__tab_active"
        className="tabs__tab"
        to={{
          pathname: 'month',
          search: 'current'
        }}
      >
        Current Month
      </NavLink>
      <NavLink
          activeClassName="tabs__tab_active"
          className="tabs__tab"
          to="month"
      >
        Month
      </NavLink>
      <NavLink
          activeClassName="tabs__tab_active"
          className="tabs__tab"
          to="week">
        Week
      </NavLink>
      <NavLink
          activeClassName="tabs__tab_active"
          className="tabs__tab"
          to="19-1-2020">
        Today
      </NavLink>
    </section>
  );
};

export default Tabs;
