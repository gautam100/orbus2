import React from "react";

const Loops = () => {
  const userData = [
    {
      id: 1,
      name: "Ajay Singh",
      age: 29,
      email: "ajay@me.in",
    },
    {
      id: 2,
      name: "Amit Singh",
      age: 30,
      email: "amit@me.in",
    },
    {
      id: 3,
      name: "Sanjay Singh",
      age: 28,
      email: "sanjay@me.in",
    },
  ];

  return <div>
    <h1>Loops</h1>
    <table border="1">
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
         {
         userData.map((user)=>(
            <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.email}</td>
            </tr>
         ))
         }
            
        </tbody>
    </table>
  </div>;
};

export default Loops;
