import React, { useEffect, useState } from "react";

function Logout(props) {
  const {
    setToken,
    setUsername,
    setPassword,
    setValidated,
    setUserPosts,
    setPostId,
  } = props;

  function buttonHandle() {
    setToken("");
    localStorage.setItem("user-token", "");
    localStorage.setItem("user-name", "");
    setUsername("");
    setPassword("");
    setValidated("");
    setUserPosts([]);
    setPostId("");
  }

  return (
    <div>
      <button onClick={buttonHandle}>Logout</button>
    </div>
  );
}

export default Logout;
