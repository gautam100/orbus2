import React, { useReducer } from "react";

const Contact = () => {

  const reducer = (state, action) => {
    if (action === "add") {
      return (state += 1);
    } else if (action === "sub") {
      return (state -= 1);
    }
  };

  const [count, dispatch] = useReducer(reducer, 100);
  //count: current state value
  //dispatch: function used to tell reducer what action to run
  //reducer: function containing state update rules
  
  return (
    <div>
      <h1>useReducer</h1>
      <h2>{count}</h2>
      <button onClick={() => dispatch("add")}>Increase</button>
      <button onClick={() => dispatch("sub")}>Decrease</button>
    </div>
  );
};

export default Contact;
