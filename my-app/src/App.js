import React, { useState, useEffect } from 'react';
import AddTodoForm from './AddTodoForm';
import ReactFlow from './ReactFlow';
import TodoList from './TodoList';

function useSemiPersistentState() {
  const [todoList, setTodoList] = useState(
    localStorage.getItem('savedTodoList')
      ? JSON.parse(localStorage.getItem('savedTodoList'))
      : []
  );

  useEffect(() => {
    localStorage.setItem('savedTodoList', JSON.stringify(todoList));
  }, [todoList]);

  return [todoList, setTodoList];
}

function App() {
  const [todoList, setTodoList] = useSemiPersistentState();

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} />
      {/* <ReactFlow /> */}
    </>
  );
}

export default App;
