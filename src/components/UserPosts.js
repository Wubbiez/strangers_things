import React, { useState, useEffect } from "react";
import { fetchUserPosts, deletePost, editPost } from "../api";
import CreatePost from "./CreatePost";
import { Link } from "react-router-dom";

function UserPosts(props) {
  const {
    token,
    title,
    setTitle,
    description,
    setDescription,
    price,
    setPrice,
    willDeliver,
    setWillDeliver,
    userPosts,
    setUserPosts,
  } = props;

  const [visible, setVisible] = useState(true);

  useEffect(() => {
    try {
      fetchUserPosts(token).then((r) => setUserPosts(r.data.data.posts));
    } catch (e) {
      console.error(e);
    }
  }, [token, setUserPosts]);

  useEffect(() => {
    setInterval(() => {
      try {
        fetchUserPosts(token).then((r) => setUserPosts(r.data.data.posts));
      } catch (e) {
        console.error(e);
      }
    }, 5000);
  }, []);

  function buttonHandle(post) {
    return <Link to={`/${post._id}`}></Link>;
  }

  return (
    <div>
      <h1>This is the user posts page</h1>
      {token
        ? userPosts.map((post) => {
            return post.active === true ? (
              <table>
                <th key={post._id}>{post.title}</th>
                <tr key={post.description}>Description:{post.description}</tr>
                <tr key={post.price}>Price:{post.price}</tr>

                <tr>
                  <button
                    onClick={(event) => {
                      try {
                        deletePost(token, post._id);
                      } catch (e) {
                        console.error(e);
                      }
                    }}
                  >
                    Delete
                  </button>
                </tr>

                <button
                  onClick={() => {
                    buttonHandle(post);
                    // try {
                    //   editPost(
                    //     token,
                    //     post._id,
                    //     title,
                    //     description,
                    //     price,
                    //     willDeliver
                    //   );
                    // } catch (e) {
                    //   console.error(e);
                    // }
                  }}
                >
                  Edit
                </button>
              </table>
            ) : null;
          })
        : null}
    </div>
  );
}

export default UserPosts;
