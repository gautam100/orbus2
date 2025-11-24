import { useState } from "react";
import Counter from "./Counter";

const StateComponent = () => {
  let [database, setDatabase] = useState("Mysql");
//   const changeDB = () => {
//     setDatabase("MongoDB");
//   }
  return (
    <div>
      <h1>{database}</h1>
      <button className="btn btn-success" onClick={()=>setDatabase('MongoDB')}>Change DB</button>
      <br /><br />
      <Counter />
    </div>
  )
}

export default StateComponent;
