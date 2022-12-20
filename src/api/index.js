import React, { useState, useEffect } from "react";
import axios from "axios";
import { TOKEN_STORAGE_KEY } from "../App";

export const BASE_URL = "https://strangers-things.herokuapp.com";
export const COHORT_NAME = "2209-FTB-ET-WEB-PT";
// export async function getPersonalInfo() {
//   try {
//     const response = await fetch(`${BASE_URL}/api/2209-ftb-et-web-ps/users/me`);
//   }
// }

export async function registerUser(username, password) {
  try {
    await fetch(`${BASE_URL}/api/${COHORT_NAME}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    });
  } catch (e) {
    throw ("err", e);
  }
}

export async function loginUser(username, password) {
  try {
    const response = await fetch(`${BASE_URL}/api/${COHORT_NAME}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    });
    const results = await response.json();
    if (results.data.token) {
      localStorage.setItem("user-token", results.data.token);
      return localStorage.getItem("user-token");
    }
  } catch (e) {
    throw ("err", e);
  }
}

export async function loginValidate(token) {
  try {
    const response = await axios.get(`${BASE_URL}/api/${COHORT_NAME}/test/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const results = await response;
    console.log(results);
    return results;
  } catch (e) {
    console.log(e);
  }
}

export async function fetchAllPosts(token) {
  try {
    const response = await axios.get(`${BASE_URL}/api/${COHORT_NAME}/posts`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const results = await response;
    return results;
  } catch (e) {
    console.error(e);
  }
}

export async function createPost(
  token,
  title,
  description,
  price,
  willDeliver
) {
  console.log(token, title, description, price, willDeliver);
  console.log("hi");
  try {
    const response = await fetch(`${BASE_URL}/api/${COHORT_NAME}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        post: {
          title: `${title}`,
          description: `${description}`,
          price: `${price}`,
          willDeliver: `${willDeliver}`,
        },
      }),
    });

    const results = await response;
    console.log(results);
  } catch (e) {
    console.error(e);
  }
}

export async function fetchUserPosts(token) {
  try {
    const response = await axios.get(
      `${BASE_URL}/api/${COHORT_NAME}/users/me`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const results = await response;
    return results;
  } catch (e) {
    console.error(e);
  }
}

export async function deletePost(token, postId) {
  try {
    const response = await axios.delete(
      `${BASE_URL}/api/${COHORT_NAME}/posts/${postId}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (e) {
    console.error(e);
  }
}

export async function editPost(
  token,
  postId,
  title,
  description,
  price,
  willDeliver
) {
  try {
    const response = await fetch(
      `${BASE_URL}/api/${COHORT_NAME}/posts/${postId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },

        body: JSON.stringify({
          post: {
            title: `${title}`,
            description: `${description}`,
            price: `${price}`,
            willDeliver: `${willDeliver}`,
          },
        }),
      }
    );
    const results = await response;
    console.log(results);
  } catch (e) {
    console.error(e);
  }
}

export async function getUser(token) {
  try {
    const response = await axios.get(
      `${BASE_URL}/api/${COHORT_NAME}/users/me`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const results = await response;
    return results;
  } catch (e) {
    console.error(e);
  }
}
