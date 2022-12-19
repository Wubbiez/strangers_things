import React, { useEffect, useState } from "react";

function Logout(props) {
  const { setToken, setUsername, setPassword, token, setValidated, setUserPosts } = props;



  function buttonHandle() {
    setToken("");
    localStorage.setItem("user-token", "");
    setUsername("");
    setPassword("");
    setValidated("");
    setUserPosts([]);
  }

  return (
    <header>
      <button onClick={buttonHandle}>Logout</button>
    </header>
  );
}

export default Logout;
