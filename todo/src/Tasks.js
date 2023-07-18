import React from "react";

const Tasks = ({ tasks, deleteTodo }) => {
  return (
    <div>
      {tasks.name + " "}
      {/* {tasks.id} */}

      <button onClick={() => deleteTodo(tasks.id)}> delete</button>
      <button> edit</button>
    </div>
  );
};

export default Tasks;
