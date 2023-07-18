import { useState } from "react";
export default function Form({ addTodo }) {
  const [message, setmessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    addTodo(message);
    setmessage("");
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="What you gonna do?"
          onChange={(e) => setmessage(e.target.value)}
          value={message}
        />
        <button type="submit">Add Task</button>
      </form>
    </>
  );
}
