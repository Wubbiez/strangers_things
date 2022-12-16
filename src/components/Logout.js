import React, { useEffect, useState } from "react";

function Logout(props) {
  const { setToken, setUsername, setPassword, token, setValidated } = props;

  useEffect(() => {}, [token]);

  function buttonHandle() {
    setToken("");
    localStorage.setItem("user-token", "");
    setUsername("");
    setPassword("");
    setValidated("");
  }

  return (
    <header>
      <button onClick={buttonHandle}>Logout</button>
    </header>
  );
}

export default Logout;
