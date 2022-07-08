import axios from 'axios';
export const BASE_URL = 'https://api.github.com';

export const API = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
  },
});
