import React from 'react';

const TodoList = () => {
  const todoList = [
    { id: 1, title: 'Write Lesson 1.1 instructions' },
    { id: 2, title: 'Submit pull request' },
    { id: 3, title: 'Respond to introduction email' },
  ];

  return (
    <div>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
