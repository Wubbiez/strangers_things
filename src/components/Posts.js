import React from "react";

function Posts(props) {
  const { token } = props;

  return (
    <div>
      <h1>This is the posts page</h1>
      <h2>{token}</h2>
    </div>
  );
}

export default Posts;
