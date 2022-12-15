import React, {useState, useEffect} from 'react';

export const BASE_URL = 'https://strangers-things.herokuapp.com';

export async function getPersonalInfo() {
  try {
    const response = await fetch(`${BASE_URL}/api/2209-ftb-et-web-ps/users/me`);
  }
}

export async function registerUser(username,password) {
  try{
    const response = fetch('https://strangers-things.herokuapp.com/api/COHORT-NAME/users/register', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password
        }
      })
  }
} catch (e) {
  }
}