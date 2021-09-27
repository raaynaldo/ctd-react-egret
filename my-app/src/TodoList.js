import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({ todoList, onRemoveTodo }) => {
  // const todoList = [
  //   { id: 1, title: 'Write Lesson 1.1 instructions' },
  //   { id: 2, title: 'Submit pull request' },
  //   { id: 3, title: 'Respond to introduction email' },
  // ];

  return (
    <div>
      <ul>
        {todoList.map((todo) => (
          <TodoListItem key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
