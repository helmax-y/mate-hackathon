import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { getTodosFromServer } from "./api";

import Tabs from './components/Tabs';
import Month from './components/Month';
import Day from './components/Day';

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const todos = await getTodosFromServer();
      setTodos(todos);
    }
    fetchData();
  }, []);

  console.log(todos);

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
