import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Tabs from './components/Tabs';
import Month from './components/Month';
import Day from './components/Day';

const App = () => {
  return (
    <main>
      <Tabs />
      <Switch>
        <Route path="/" exact component={Month} />
        <Route path="/month" component={Month} />
        <Route path="/:date?" component={Day} />
      </Switch>
    </main>
  );
};

export default App;
