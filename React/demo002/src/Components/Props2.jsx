import React from "react";

const Props2 = ({ obj }) => {
  obj[0] = "Playing cricket"
  return (
    <>
      <div>
        <h2>Hobbies:</h2>
        {obj[0]} | 
        {obj[1]}
      </div>
    </>
  );
};

export default Props2;
