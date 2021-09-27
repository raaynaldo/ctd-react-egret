import { useEffect, useState } from 'react';

const ReactFlow = () => {
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(0);

  const [todoList, setTodoList] = useState([])
  const sortedTodolist = todoList.sort();
  
  console.log('side effect');

  // useEffect(() => {
  //   console.log('render all the time');
  // });

  useEffect(() => {
    console.log('first time render');
  }, []);

  // useEffect(() => {
  //   console.log('render when count is changed');
  // }, [count]);

  // useEffect(() => {
  //   console.log('timer when count is changed');
  // }, [timer]);

  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <div>Timer : {timer}</div>
      <button onClick={() => setCount(timer + 1)}>Add</button>
    </div>
  );
};

export default ReactFlow;
