const URL_TODOS = 'https://my-json-server.typicode.com/helmax-y/mate-hackathon/todos';

export const getTodosFromServer = async() => {
  const todos = await fetch(URL_TODOS);

  return todos.json();
};
