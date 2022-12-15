import React, {useState, useEffect} from 'react';

export const BASE_URL = 'https://strangers-things.herokuapp.com';

export async function getPersonalInfo() {
  try {
    const response = await fetch(`${BASE_URL}/api/2209-ftb-et-web-ps/users/me`);
  }
}
