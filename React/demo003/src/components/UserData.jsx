import React, { useState } from "react";

const UserData = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const [userData, setUserData] = useState([]);
  const handleAdd = () => {
    let obj = {
      name: name,
      email: email,
      mobile: mobile,
    };
    //setUserData(userData.push(obj))
    setUserData([...userData, obj]);
    console.log(userData);
  };
  return (
    <div>
      <input
        type="text"
        id="user_name"
        placeholder="Enter Name"
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      <input
        type="email"
        id="user_email"
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <br />
      <input
        type="text"
        id="user_mobile"
        placeholder="Enter Mobile"
        onChange={(e) => setMobile(e.target.value)}
      />
      <br />
      <br />
      <button onClick={() => handleAdd()}>Add</button>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user.email}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.mobile}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserData;
