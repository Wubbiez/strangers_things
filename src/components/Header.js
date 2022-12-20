import { Link } from "react-router-dom";
import { getUser } from "../api";
import { useEffect, useState } from "react";
import { TOKEN_STORAGE_KEY } from "../App";

function Header(props) {
  const { token, user, setUser } = props;

  useEffect(() => {}, [token]);
  return (
    <header>
      {token ? (
        <div>Welcome {user.data.data.username.toUpperCase()}!</div>
      ) : null}
      {!token ? <div>Welcome Guest!</div> : null}

      <Link to={"/home"}>Home</Link>
      {!user && <Link to={"/register"}>Register</Link>}
      {!user && <Link to={"/login"}>Login</Link>}
      {user && <Link to={"/posts"}>Posts</Link>}
    </header>
  );
}

export default Header;
