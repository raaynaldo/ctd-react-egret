import React from 'react';

const todoList = [
  { id: 1, title: 'Write Lesson 1.1 instructions' },
  { id: 2, title: 'Submit pull request' },
  { id: 3, title: 'Respond to introduction email' },
];

function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
