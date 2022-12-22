import React from "react";
import { useEffect } from "react";
import { getPost } from "../api";

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
  // useEffect(() => {
  // }, []);
  return (
    <table>
      <th>{title}</th>
      <tr>Description:{description}</tr>
      <tr>Price:{price}</tr>
      {token ? <tr>You have token </tr> : null}
    </table>
  );
}

export default SinglePost;
