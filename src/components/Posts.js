import React, { useState, useEffect } from "react";
import { deletePost, fetchAllPosts } from "../api";
import styles from "./Posts.module.css";
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
    user,
  } = props;

  const [postsLoaded, setPostsLoaded] = useState(false);

  useEffect(() => {
    try {
      fetchAllPosts(token).then((r) => setPosts(r.data.data.posts));
    } catch (e) {
      console.error(e);
    }
    setPostsLoaded(true);
  }, [token, setPosts, postsLoaded]);

  return (
    <div className={styles.container}>
      <h1>This is the posts page</h1>

      {posts.map((post) => {
        return (
          <div>
            <table className={styles.cards}>
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
              <tr>{user}</tr>
              {token && post.author.username == user ? (
                <tr>
                  <button
                    onClick={(event) => {
                      try {
                        deletePost(token, post._id);
                      } catch (e) {
                        console.error(e);
                      }
                      setPostsLoaded(false);
                    }}
                  >
                    Delete
                  </button>
                </tr>
              ) : null}
            </table>
          </div>
        );
      })}
    </div>
  );
}

export default Posts;
