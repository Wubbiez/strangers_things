import "./App.css";
import Login from "./components/Login";
import React, { useState, useEffect } from "react";
import Signup from "./components/Signup";
import Posts from "./components/Posts";
import Logout from "./components/Logout";
import UserPosts from "./components/User_Posts";

export const TOKEN_STORAGE_KEY = "user-token";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [posts, setPosts] = useState([]);
  const [validated, setValidated] = useState("");
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    const storageToken = localStorage.getItem(TOKEN_STORAGE_KEY);
    setToken(storageToken);
  }, [token, validated]);
  return (
    <div>
      <Logout
        token={token}
        setToken={setToken}
        setUsername={setUsername}
        setPassword={setPassword}
        setValidated={setValidated}
      />
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
        validated={validated}
        setValidated={setValidated}
      />
      <Posts token={token} setPosts={setPosts} posts={posts} />
      <UserPosts
        token={token}
        setUserPosts={setUserPosts}
        userPosts={userPosts}
      />
    </div>
  );
}

export default App;
