import Heading from "./Heading";
import Form from "./Form";
import { useState } from "react";
import Tasks from "./Tasks";
let nextId = 0;

function App() {
  const [todos, settodos] = useState([]);

  // const addTodo = (todo) => {
  //   settodos([...todos, { id: nextId++, name: todo }]);
  //   console.log(todos);
  // };
  function addTodo(todo) {
    settodos([...todos, { id: nextId++, name: todo }]);
  }

  function deleteTodo(id) {
    settodos(todos.filter((todo) => todo.id !== id));
  }
  return (
    <>
      <Heading />
      <Form addTodo={addTodo} />
      {todos.map((name, index) => (
        <Tasks tasks={name} index={index} deleteTodo={deleteTodo} />
      ))}
    </>
  );
}

export default App;
