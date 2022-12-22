import { Link } from "react-router-dom";
import { getUser } from "../api";
import { useEffect, useState } from "react";
import { TOKEN_STORAGE_KEY } from "../App";
import styles from "./Header.module.css";
import Logout from "./Logout";

function Header(props) {
  const {
    token,
    user,
    setUser,
    setToken,
    setUsername,
    setPassword,
    setValidated,
    setUserPosts,
    setPostId,
  } = props;
  useEffect(() => {}, [token]);
  return (
    <header className={styles.container}>
      {token ? <div>Welcome {user}!</div> : null}
      {!token ? <div>Welcome Guest!</div> : null}

      <Link to={"/home"}>Home</Link>
      {<Link to={"/posts"}>Posts</Link>}
      {!user && <Link to={"/register"}>Register</Link>}
      {!user && <Link to={"/login"}>Login</Link>}
      {user && <Link to={"/userposts"}>My Posts</Link>}
      {user && <Link to={"/createpost"}>New Post</Link>}
      {user && (
        <Logout
          token={token}
          setToken={setToken}
          setUsername={setUsername}
          setPassword={setPassword}
          setValidated={setValidated}
          setUserPosts={setUserPosts}
          setUser={setUser}
          setPostId={setPostId}
        />
      )}
    </header>
  );
}

export default Header;
