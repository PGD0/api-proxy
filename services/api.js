// services/remoteApi.js
import axios from 'axios';

const BASE_URL = process.env.PRIVATE_API_URL;
const API_KEY = process.env.PRIVATE_API_KEY;

const client = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export async function getResource(path, params = {}) {
  try {
    const res = await client.get(path, {
      params,
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });

    return res.data;
  } catch (err) {
    if (err.response) {
      const e = new Error(
        `Remote error: ${err.response.status} ${err.response.statusText}`
      );
      e.status = err.response.status;
      e.remoteData = err.response.data;
      throw e;
    }
    throw err;
  }
}

export { client };
