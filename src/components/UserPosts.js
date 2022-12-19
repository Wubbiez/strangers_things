import React, { useState, useEffect } from "react";
import { fetchUserPosts,deletePost, editPost } from "../api";

function UserPosts(props) {
  const { token,title,setTitle, description, setDescription, price,setPrice, willDeliver, setWillDeliver, userPosts,setUserPosts  } = props;

  useEffect(() => {
    try {
      fetchUserPosts(token).then((r) => setUserPosts(r.data.data.posts));
    } catch (e) {
      console.error(e);
    }
  }, [userPosts,token]);

  function editHandle() {
    console.log('hi')
    return (
        <li>Hi</li>
    )

  }



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
              </button>
                <button onClick={() => {
                  editHandle();
                  try {
                    editPost(token,post._id,title,description,price,willDeliver)
                  } catch (e) {
                    console.error(e)
                  }
                }}>Edit
              </button>
              </li> : null
          );
        }): null}
      </ul>
    </div>
  );
}

export default UserPosts;
