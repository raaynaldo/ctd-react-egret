import React, { useState, useEffect } from 'react';
import AddTodoForm from './AddTodoForm';
// import ReactFlow from './ReactFlow';
import TodoList from './TodoList';

// function useSemiPersistentState() {
//   const [todoList, setTodoList] = useState(
//     localStorage.getItem('savedTodoList')
//       ? JSON.parse(localStorage.getItem('savedTodoList'))
//       : []
//   );

//   useEffect(() => {
//     localStorage.setItem('savedTodoList', JSON.stringify(todoList));
//   }, [todoList]);

//   return [todoList, setTodoList];
// }

function App() {
  // const [todoList, setTodoList] = useSemiPersistentState();
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          data: {
            todoList: localStorage.getItem('savedTodoList')
              ? JSON.parse(localStorage.getItem('savedTodoList'))
              : [],
          },
        });
      }, 2000);
    }).then((result) => {
      setIsLoading(false);
      setTodoList(result.data.todoList);
    });
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('savedTodoList', JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  const removeTodo = (id) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  };

  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
      )}
      {/* <ReactFlow /> */}
    </>
  );
}

export default App;
