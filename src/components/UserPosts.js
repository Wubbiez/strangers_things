import React, { useState, useEffect } from "react";

import { fetchUserPosts,deletePost } from "../api";

function UserPosts(props) {
  const { token, setUserPosts, userPosts } = props;

  useEffect(() => {
    try {
      fetchUserPosts(token).then((r) => setUserPosts(r.data.data.posts));
    } catch (e) {
      console.error(e);
    }
  }, [userPosts,token]);


  return (
    <div>
      <h1>This is the user posts page</h1>
      <ul>
        {token ? userPosts.map((post) => {
          return (
              post.active===true ?
              <li>{post.title}
                <button onClick={(event) => {
                  try {
                    deletePost(token, post._id)
                  } catch(e) {
                  console.error(e)
                }
                }}>Delete
              </button></li>
              : null
          );
        }): null}
      </ul>
    </div>
  );
}

export default UserPosts;
