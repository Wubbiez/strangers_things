import React, { useState, useEffect } from "react";
import { createPost } from "../api";

function CreatePost(props) {
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
  } = props;

  useEffect(() => {}, [token]);

  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();
        setTitle("");
        setDescription("");
        setPrice("");
        setWillDeliver(false);
        try {
          await createPost(token, title, description, price, willDeliver);
        } catch (e) {
          console.error(e);
        }
      }}
    >
      <fieldset>
        <label htmlFor="title">Item Title: </label>
        <input
          id="title"
          type="text"
          required={true}
          placeholder="Enter Item Title"
          value={title}
          onChange={async (event) => {
            event.preventDefault();
            setTitle(event.target.value);
          }}
        />
      </fieldset>

      <fieldset>
        <label htmlFor="description">Description:</label>
        <input
          id="description"
          type="text"
          required={true}
          placeholder="Enter Item Description"
          value={description}
          onChange={async (event) => {
            event.preventDefault();
            setDescription(event.target.value);
          }}
        />
      </fieldset>

      <fieldset>
        <label htmlFor="price">Price:</label>
        <input
          id="price"
          type="text"
          required={true}
          placeholder="Enter Item Price"
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
      <button>Submit!</button>
    </form>
  );
}

export default CreatePost;
