import React, { useEffect, useState } from "react";
import { loginUser, loginValidate } from "../api";

function Login(props) {
  const { username, setUsername, password, setPassword, token, setToken } =
    props;

  const [validated, setValidated] = useState("");
  //
  useEffect(() => {}, [validated]);

  async function buttonHandle() {
    if (!token) {
      try {
        setToken(await loginUser(username, password));
      } catch (e) {
        console.error(e);
        setPassword("");
      }
      try {
        const validated = await loginValidate(token);
        setValidated(validated.data.data.message);
      } catch (e) {
        console.error(e);
        setValidated("Username and/or password are incorrect");
      }
    } else {
      setValidated("You are already logged in!");
    }
  }

  return (
    <div>
      <h1>This is the Log-in page</h1>
      <input
        placeholder="Enter Your Username"
        value={username}
        onChange={async (event) => {
          event.preventDefault();
          setUsername(event.target.value);
        }}
      ></input>
      <input
        placeholder="Enter Your Password"
        value={password}
        type={"password"}
        onChange={async (event) => {
          event.preventDefault();
          setPassword(event.target.value);
        }}
      ></input>
      <button onClick={buttonHandle}>Submit</button>
      {validated ? (
        <div>
          <p>{validated}</p>
        </div>
      ) : null}
    </div>
  );
}

export default Login;
