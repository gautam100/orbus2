import React from "react";

const Props1 = (data) => {
  //data.name = "Virat";//Error
  return (
    <>
      <h1>This is Props1.jsx</h1>
      <div>
        Name is {data.name}, age is {data.age}
        <br />
        Is indian?
        {data.isIndian ? "Yes" : "No"}
      </div>
    </>
  );
};

export default Props1;
