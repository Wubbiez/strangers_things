import React, { useState, useEffect } from "react";

import { fetchAllPosts } from "../api";

function Posts(props) {
  const { token, setPosts, posts } = props;

  useEffect(() => {
    try {
      fetchAllPosts(token).then((r) => setPosts(r.data.data.posts));
    } catch (e) {
      console.error(e);
    }
  }, [posts]);

  return (
    <div>
      <h1>This is the posts page</h1>
      <ul>
        {posts.map((post) => {
          return <li>{post.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default Posts;
