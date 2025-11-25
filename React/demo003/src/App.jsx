import { useEffect, useState } from "react";
import UseReff from "./components/useReff";
import PassFunc from "./components/PassFunc";
import UserData from "./components/UserData";

function App() {
  let [counter, setCounter] = useState(0);
  let [counter1, setCounter1] = useState(0);

  function callWithLoad() {
    console.log("Inside callWithLoad function");
  }
  useEffect(() => {
    callWithLoad();
  },[]);

  function callWithLoad2() {
    console.log("Inside callWithLoad2 function");
  }
  useEffect(() => {
    callWithLoad2();
  },[counter1]);



  const handleClick = () => {
    setCounter(counter + 1);
  };
  return (
    <>
      <h1>useEffect</h1>
      <button onClick={handleClick}>Counter{counter}</button>
      <button onClick={()=>setCounter1(counter1+1)}>Counter1 : {counter1}</button>
      <hr />
      <UseReff />
      <hr />
      <PassFunc />
      <hr />
      <UserData />
    </>
  );
}

export default App;
