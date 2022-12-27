import { Link } from "react-router-dom";
import { getUser } from "../api";
import { useEffect, useState } from "react";
import { TOKEN_STORAGE_KEY } from "../App";
import styles from "./Header.module.css";
import Logout from "./Logout";
import logo from "../images/logo.png";

function Header(props) {
  const {
    token,
    user,
    currentPage,
    setUser,
    setToken,
    setUsername,
    setPassword,
    setValidated,
    setUserPosts,
    setPostId,
    setCurrentPage,
  } = props;
  useEffect(() => {}, [token]);
  return (
    <header className={styles.container}>
      <div className={styles.headerLogo}>
        <img src={logo} />

        <div>
          {token ? (
            <div className={styles.user}>Welcome {user}!</div>
          ) : (
            <div className={styles.user}>Welcome Guest!</div>
          )}
        </div>
      </div>
      <div className={styles.links}>
        {
          <a
            onClick={() => {
              setCurrentPage("/home");
            }}
          >
            {" "}
            <Link to={"/home"}>Home</Link>
          </a>
        }
        {
          <a
            onClick={() => {
              setCurrentPage("/posts");
            }}
          >
            <Link to={"/posts"}>Posts</Link>
          </a>
        }
        {!user && (
          <a
            onClick={() => {
              setCurrentPage("/register");
            }}
          >
            {" "}
            <Link to={"/register"}>Register</Link>
          </a>
        )}
        {!user && (
          <a
            onClick={() => {
              setCurrentPage("/login");
            }}
          >
            {" "}
            <Link to={"/login"}>Login</Link>
          </a>
        )}
        {user && (
          <a
            onClick={() => {
              setCurrentPage("/userposts");
            }}
          >
            {" "}
            <Link to={"/userposts"}>My Posts</Link>
          </a>
        )}
        {user && (
          <a
            onClick={() => {
              setCurrentPage("/createpost");
            }}
          >
            {" "}
            <Link to={"/createpost"}>New Post</Link>
          </a>
        )}
        {user && (
          <Logout
            token={token}
            currentPage={currentPage}
            setToken={setToken}
            setUsername={setUsername}
            setPassword={setPassword}
            setValidated={setValidated}
            setUserPosts={setUserPosts}
            setUser={setUser}
            setPostId={setPostId}
            setCurrentPage={setCurrentPage}
          />
        )}
      </div>
    </header>
  );
}

export default Header;
