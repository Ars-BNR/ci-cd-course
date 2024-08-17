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
          fontSize: "90px",
          background: "blue",
        }}
      >
        {state}
      </h1>
      <button onClick={increment}>increment + 1</button>
    </div>
  );
};

export default App;
