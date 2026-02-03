import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ margin: "1rem 0" }}>
      <h2>Counter</h2>
      <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>
        Decrement
      </button>
      <span style={{ margin: "0 1rem", fontSize: "1.5rem" }}>{count}</span>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
