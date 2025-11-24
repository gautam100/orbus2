import React, { useState } from "react";
import CheckBox from "./CheckBox";
import Radio_DD from "./Radio_DD";

const ControlledComponent = () => {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  return (
    <div>
      <h1>Controlled Component</h1>
      <form>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <input
          type="password"
          value={password}
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <CheckBox />
        <Radio_DD />
      </form>
      <div>
        {name} --
        {password} --
        {email}
      </div>
    </div>
  );
};

export default ControlledComponent;
