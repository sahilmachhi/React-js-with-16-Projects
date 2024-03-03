import React, { useState, useContext } from "react";
import mainContext from "../Context/mainContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(mainContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };
  return (
    <>
      <h2>login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
          console.log(e.target.value);
        }}
        placeholder="username"
      />
      <input
        type="text"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          console.log(e.target.value);
        }}
        placeholder="password"
      />
      <button onClick={handleSubmit}>submit</button>
    </>
  );
}

export default Login;
