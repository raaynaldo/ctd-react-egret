import React, { useState, useEffect } from 'react';
import AddTodoForm from './AddTodoForm';
// import ReactFlow from './ReactFlow';
import TodoList from './TodoList';
import styled from 'styled-components';
import Title from './Title';
import './app.css';

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

const SecondTitle = styled(Title)`
  border: solid black 1px;
`;

function App() {
  // const [todoList, setTodoList] = useSemiPersistentState();
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // console.log(process.env);
  // console.log(process.env.REACT_APP_AIRTABLE_API_KEY);

  useEffect(() => {
    // new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve({
    //       data: {
    //         todoList: localStorage.getItem('savedTodoList')
    //           ? JSON.parse(localStorage.getItem('savedTodoList'))
    //           : [],
    //       },
    //     });
    //   }, 2000);
    // }).then((result) => {
    //   setIsLoading(false);
    //   setTodoList(result.data.todoList);
    // });

    fetch(
      `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Defatult?`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.records);
        const todoList = data.records.map((record) => {
          return {
            id: record.id,
            title: record.fields.Title,
            completed: !!record.fields.Completed,
          };
        });
        console.log(todoList);

        // todoList.sort((a, b) => {
        //   const aLowerCase = a.title.toLowerCase();
        //   const bLowerCase = b.title.toLowerCase();

        //   return aLowerCase < bLowerCase ? -1 : 1;
        // });

        sortTodo(todoList, 'title', 'desc');
        console.log(todoList);
        setTodoList(todoList);
        setIsLoading(false);
      });
  }, []);

  /**
   *
   * @param {array} todoList
   * @param {string} field // completed | title
   * @param {string} direction // asc | desc
   */
  function sortTodo(todoList, field, direction) {
    todoList.sort((a, b) => {
      if (direction === 'desc') {
        return a[field] < b[field] ? 1 : -1;
      } else {
        return a[field] < b[field] ? -1 : 1;
      }
    });
  }

  function buttonDirectionSortHandler(direction) {
    const copyTodo = [...todoList];
    sortTodo(copyTodo, 'title', direction);
    setTodoList(copyTodo);
  }

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
      <Title>Todo List</Title>
      <button onClick={() => buttonDirectionSortHandler('asc')}>ASC</button>
      <button onClick={() => buttonDirectionSortHandler('desc')}>DESC</button>
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

export { SecondTitle };
