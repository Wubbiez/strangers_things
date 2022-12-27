import React, { useState, useEffect } from "react";
import { fetchUserPosts, deletePost, editPost, postMessage } from "../api";
import CreatePost from "./CreatePost";
import { Link } from "react-router-dom";
import styles from "./UserPosts.module.css";

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
  const [messageText, setMessageText] = useState("");
  const [sendingMessage, setSendingMessage] = useState(false);

  useEffect(() => {
    try {
      fetchUserPosts(token).then((r) => setUserPosts(r.data.data.posts));
    } catch (e) {
      console.error(e);
    }
    setPostsLoaded(true);
  }, [token, setUserPosts, postsLoaded, sendingMessage]);

  const useToggle = (initialState) => {
    const [toggleValue, setToggleValue] = useState(initialState);

    const toggler = () => {
      setToggleValue(!toggleValue);
    };
    return [toggleValue, toggler];
  };

  const useToggle2 = (initialState) => {
    const [toggleValue2, setToggleValue2] = useState(initialState);

    const toggler2 = () => {
      setToggleValue2(!toggleValue2);
    };
    return [toggleValue2, toggler2];
  };

  const [toggle, setToggle] = useToggle();
  const [toggle2, setToggle2] = useToggle2();

  return (
    <div className={styles.container}>
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
                    <button onClick={setToggle2}>Reply</button>
                  </table>
                ) : null}
                {toggle2 && (
                  <form
                    id="sendMessage"
                    onSubmit={async (event) => {
                      event.preventDefault();
                      setSendingMessage(true);
                      setMessageText("");

                      try {
                        await postMessage(token, post._id, messageText);
                      } catch (e) {
                        console.error(e);
                      } finally {
                        setSendingMessage(false);
                      }
                    }}
                  >
                    <fieldset>
                      <label htmlFor="messageText">Type Message Here:</label>
                      <input
                        id="messageText"
                        type="text"
                        placeholder="..."
                        value={messageText}
                        onChange={async (event) => {
                          event.preventDefault();
                          setMessageText(event.target.value);
                        }}
                      />
                    </fieldset>
                    <button>SEND</button>
                  </form>
                )}
              </>
            ) : null;
          })
        : null}
    </div>
  );
}

export default UserPosts;
