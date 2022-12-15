import "./App.css";
import Login from "./components/Login";
import React, { useState } from "react";
import Signup from "./components/Signup";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <Signup
        setUsername={setUsername}
        setPassword={setPassword}
        username={username}
        password={password}
      />
      <Login
        setUsername={setUsername}
        setPassword={setPassword}
        username={username}
        password={password}
      />
    </div>
  );
}

export default App;
