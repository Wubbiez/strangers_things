import React from "react";
import {registerUser} from "../api";

function Signup(props) {
  const {username, setUsername, password, setPassword} = props;

  async function buttonHandle() {
    await registerUser(username, password);
  }

  return (
      <div>
        <h1>This is the Sign-up page</h1>
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
      </div>
  );
}

export default Signup;
