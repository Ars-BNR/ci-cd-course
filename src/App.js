import React, { useState } from "react";

const App = () => {
  const [state, setState] = useState(0);

  const increment = () => {
    setState((prev) => prev + 1);
  };
  return (
    <div>
      <h1
        style={{
          fontSize: "50px",
        }}
      >
        {state}
      </h1>
      <button onClick={increment}>increment</button>
    </div>
  );
};

export default App;
