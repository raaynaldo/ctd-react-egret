import React, { useState } from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

function App() {
  const [newTodo, setNewTodo] = useState('');

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={setNewTodo} />
      {newTodo ? <p>Succesfully added: "{newTodo}"</p> : null}
      <TodoList />
    </div>
  );
}

export default App;
