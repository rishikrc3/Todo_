import React from "react";
import Buttons from "./Buttons";
import Chat from "./Chat";
const Body = () => {
  return (
    <div style={{ display: "flex" }}>
      {/* Left half of the screen - Buttons */}
      <Buttons style={{ flex: 1 }} />

      {/* Right half of the screen - Chat */}
      <Chat style={{ flex: 1 }} />
    </div>
  );
};

export default Body;
