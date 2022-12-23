import React, { useState, useEffect } from "react";
import { fetchAllPosts } from "../api";
import styles from "./Posts.module.jss.css";
import { Link } from "react-router-dom";

function Posts(props) {
  const {
    token,
    setPosts,
    posts,
    setPostId,
    postId,
    setDescription,
    setPrice,
    setTitle,
    setWillDeliver,
  } = props;

  useEffect(() => {
    try {
      fetchAllPosts(token).then((r) => setPosts(r.data.data.posts));
    } catch (e) {
      console.error(e);
    }
  }, [token, setPosts]);

  return (
    <div className={styles.container}>
      <h1>This is the posts page</h1>

      {posts.map((post) => {
        return (
          <table>
            <th>
              <a
                onClick={() => {
                  setPostId(post._id);
                  setDescription(post.description);
                  setPrice(post.price);
                  setTitle(post.title);
                  setWillDeliver(post.willDeliver);
                }}
              >
                <Link to={`/${post._id}`}>{post.title}</Link>
              </a>
            </th>
            <tr key={post.description}>Description:{post.description}</tr>
            <tr key={post.price}>Price:{post.price}</tr>
          </table>
        );
      })}
    </div>
  );
}

export default Posts;
