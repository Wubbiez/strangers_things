import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Posts from "./components/Posts";
import Logout from "./components/Logout";
import UserPosts from "./components/UserPosts";
import CreatePost from "./components/CreatePost";
import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

export const TOKEN_STORAGE_KEY = "user-token";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [posts, setPosts] = useState([]);
  const [validated, setValidated] = useState("");
  const [userPosts, setUserPosts] = useState([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [willDeliver, setWillDeliver] = useState(false);

  useEffect(() => {
    const storageToken = localStorage.getItem(TOKEN_STORAGE_KEY);
    setToken(storageToken);
  }, [token]);
  return (
    <div>
      <Switch>
        <Route exact path={"/logout"}>
          <Logout
            token={token}
            setToken={setToken}
            setUsername={setUsername}
            setPassword={setPassword}
            setValidated={setValidated}
            setUserPosts={setUserPosts}
          />
        </Route>
        <Route exact path={"/register"}>
          <Signup
            setUsername={setUsername}
            setPassword={setPassword}
            username={username}
            password={password}
          />
        </Route>
        <Route exact path={"/login"}>
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
        </Route>
        <Route exact path={"/posts"}>
          <Posts token={token} setPosts={setPosts} posts={posts} />
        </Route>
        <Route exact path={"/userposts"}>
          <UserPosts
            token={token}
            setUserPosts={setUserPosts}
            userPosts={userPosts}
            title={title}
            setTitle={setTitle}
            description={description}
            setDescription={setDescription}
            price={price}
            setPrice={setPrice}
            willDeliver={willDeliver}
            setWillDeliver={setWillDeliver}
          />
        </Route>
        <Route exact path={"/createpost"}>
          <CreatePost
            token={token}
            title={title}
            setTitle={setTitle}
            description={description}
            setDescription={setDescription}
            price={price}
            setPrice={setPrice}
            willDeliver={willDeliver}
            setWillDeliver={setWillDeliver}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
