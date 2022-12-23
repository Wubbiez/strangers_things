import React, { useState, useEffect } from "react";
import { fetchUserPosts, deletePost, editPost, postMessage } from "../api";
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

  const [postsLoaded, setPostsLoaded] = useState(false);

  useEffect(() => {
    try {
      fetchUserPosts(token).then((r) => setUserPosts(r.data.data.posts));
    } catch (e) {
      console.error(e);
    }
    setPostsLoaded(true);
  }, [token, setUserPosts, postsLoaded]);

  // useEffect(() => {
  //   setInterval(() => {
  //     try {
  //       fetchUserPosts(token).then((r) => setUserPosts(r.data.data.posts));
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   }, 5000);
  // }, []);

  const useToggle = (initialState) => {
    const [toggleValue, setToggleValue] = useState(initialState);

    const toggler = () => {
      setToggleValue(!toggleValue);
    };
    return [toggleValue, toggler];
  };

  const [toggle, setToggle] = useToggle();

  return (
    <div>
      <h1>This is the user posts page</h1>
      {token
        ? userPosts.map((post) => {
            return post.active === true ? (
              <>
                <table>
                  <th key={post._id}>{post.title}</th>
                  <tr key={post.description}>
                    Description: {post.description}
                  </tr>
                  <tr key={post.price}>Price: {post.price}</tr>

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

                  <button onClick={setToggle}>Edit</button>
                </table>
                {toggle && (
                  <form
                    id="sendMessage"
                    onSubmit={async (event) => {
                      event.preventDefault();
                      setPostsLoaded(true);
                      setTitle("");

                      try {
                        await editPost(
                          token,
                          post._id,
                          title,
                          description,
                          price,
                          willDeliver
                        );
                      } catch (e) {
                        console.error(e);
                      } finally {
                        setPostsLoaded(false);
                      }
                    }}
                  >
                    <fieldset>
                      <label htmlFor="title">Title: </label>
                      <input
                        id="title"
                        required={true}
                        type="text"
                        value={title}
                        onChange={async (event) => {
                          event.preventDefault();
                          setTitle(event.target.value);
                        }}
                      />
                    </fieldset>
                    <fieldset>
                      <label htmlFor="description">Description: </label>
                      <input
                        id="description"
                        required={true}
                        type="text"
                        value={description}
                        onChange={async (event) => {
                          event.preventDefault();
                          setDescription(event.target.value);
                        }}
                      />
                    </fieldset>
                    <fieldset>
                      <label htmlFor="price">Price: </label>
                      <input
                        id="price"
                        required={true}
                        type="number"
                        value={price}
                        onChange={async (event) => {
                          event.preventDefault();
                          setPrice(event.target.value);
                        }}
                      />
                    </fieldset>
                    <fieldset>
                      <label htmlFor="willDeliver">Will Deliver:</label>
                      <select
                        name="deliveryOption"
                        id="willDeliver"
                        required={true}
                        value={willDeliver}
                        onChange={(event) => {
                          setWillDeliver(event.target.value);
                        }}
                      >
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                      </select>
                    </fieldset>
                    <button>SEND</button>
                  </form>
                )}
                {post.messages.length > 0 ? (
                  <table>
                    <th>Messages</th>
                    {post.messages.map((message) => {
                      return (
                        <tr>
                          {message.fromUser.username}: {message.content}
                        </tr>
                      );
                    })}
                  </table>
                ) : null}
              </>
            ) : null;
          })
        : null}
    </div>
  );
}

export default UserPosts;
