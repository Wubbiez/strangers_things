import "./App.css";
import Login from "./components/Login";
import React, { useState, useEffect } from "react";
import Signup from "./components/Signup";
import Posts from "./components/Posts";

const TOKEN_STORAGE_KEY = "user-token";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storageToken = localStorage.getItem(TOKEN_STORAGE_KEY);
    setToken(storageToken);
  }, [token]);
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
        setToken={setToken}
        token={token}
      />
      <Posts token={token} setPosts={setPosts} posts={posts} />
    </div>
  );
}

export default App;
