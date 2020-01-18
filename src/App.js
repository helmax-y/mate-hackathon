import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Month from './components/Month';
import Day from './components/Day';

const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={Month} />
      <Route path="/:date?" component={Day} />
    </Switch>
  );
};

export default App;
