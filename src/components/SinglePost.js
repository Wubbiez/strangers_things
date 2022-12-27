import React from "react";
import { useEffect, useState } from "react";
import { getPost, postMessage } from "../api";

function SinglePost(props) {
  const {
    user,
    token,
    title,
    setTitle,
    description,
    setDescription,
    price,
    setPrice,
    willDeliver,
    setWillDeliver,
    postId,
  } = props;

  const [messageText, setMessageText] = useState("");
  const [sendingMessage, setSendingMessage] = useState(false);

  useEffect(() => {}, [sendingMessage]);

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
      <>
        <table>
          <th>{title}</th>
          <tr>Description:{description}</tr>
          <tr>Price:{price}</tr>
          {token ? (
            <tr>
              <button onClick={setToggle}>Contact Seller!</button>
            </tr>
          ) : null}
        </table>
      </>
      {/*{post.messages.length > 0 ? (*/}
      {/*    <table>*/}
      {/*      <th>Messages</th>*/}
      {/*      {post.messages.map((message) => {*/}
      {/*        return (*/}
      {/*            <tr>*/}
      {/*              {message.fromUser.username}: {message.content}*/}
      {/*            </tr>*/}
      {/*        );*/}
      {/*      })}*/}
      {toggle && (
        <form
          id="sendMessage"
          onSubmit={async (event) => {
            event.preventDefault();
            setSendingMessage(true);
            setMessageText("");

            try {
              await postMessage(token, postId, messageText);
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
    </div>
  );
}

export default SinglePost;
