import { useState } from "react";
export default function Form() {
  const [message, setmessage] = useState("");
  const [updated, setupdated] = useState(message);

  function handleChange(event) {
    setmessage(event.target.value);
  }
  function handleClick() {
    setupdated(message);
  }

  return (
    <>
      <input type="text" onChange={handleChange} value={message} />
      <button onClick={handleClick}>Enter</button>

      <h2>{updated}</h2>
    </>
  );
}
