import { useState } from "react";
let nextId = 0;
export default function Form() {
  const [message, setmessage] = useState("");
  const [tasks, settasks] = useState([]);
  const [completedtasks, setcompletedtasks] = useState([]);

  function handleClick() {
    settasks([...tasks, { id: nextId++, name: message }]);
  }
  return (
    <>
      <input onChange={(e) => setmessage(e.target.value)} value={message} />
      <button onClick={handleClick}>Enter</button>

      <h2>Completed tasks</h2>
      <h2>Pending tasks</h2>
      <ul>
        {tasks.map((tasks) => (
          <li key={tasks.id}>
            {tasks.name} <button> Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}
