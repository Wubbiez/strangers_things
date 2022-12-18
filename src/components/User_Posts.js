import React, { useState, useEffect } from "react";

import { fetchUserPosts } from "../api";

function UserPosts(props) {
  const { token, setUserPosts, userPosts } = props;

  useEffect(() => {
    try {
      fetchUserPosts(token).then((r) => setUserPosts(r.data.data.posts));
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <div>
      <h1>This is the user posts page</h1>
      <ul>
        {userPosts.map((post) => {
          return <li>{post.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default UserPosts;
