import React from "react";
import { useRef } from "react";

const UseReff = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const handleForm = (event)=>{
    event.preventDefault()
    const user = usernameRef.current.value 
    const password = passwordRef.current.value

    document.getElementById("result_container").innerHTML = "User name is:"+user+" and password is :"+password
  }

  return (
    <div>
      <h1>Uncontrolled Component through useRef</h1>
      <form action="" method="post" onSubmit={handleForm}>
        <input type="text" ref={usernameRef} id="usernameRef" placeholder="Enter user name" />
        <br />
        <br />
        <input type="password" ref={passwordRef} id="passwordRef" placeholder="Enter password" />
        <br />
        <br />
        <button>Submit with useRef</button>
      </form>
      <div id="result_container">...</div>
    </div>
  );
};

export default UseReff;
