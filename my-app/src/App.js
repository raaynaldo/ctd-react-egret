import React from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <TodoList />
        <AddTodoForm />
      </div>
    );
  }
}

// function App() {

//   return (
//     <div>
//       <h1>Todo List</h1>
//       <TodoList />
//       <AddTodoForm />
//     </div>
//   );
// }

export default App;
