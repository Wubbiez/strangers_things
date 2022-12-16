import React, { useEffect, useState } from "react";
import { loginUser, loginValidate } from "../api";

function Login(props) {
  const { username, setUsername, password, setPassword, token, setToken } =
    props;

  const [validated, setValidated] = useState("");
  //
  // useEffect(() => {}, [token]);

  async function buttonHandle() {
    console.log(username, password);
    try {
      setToken(await loginUser(username, password));
    } catch (e) {
      alert("That username and/or password is incorrect!");
    } finally {
      const validationText = await loginValidate(token);
      console.log(validationText);
      setValidated(validationText.data.data.message);
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
