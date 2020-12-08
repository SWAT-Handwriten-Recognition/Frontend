import axios from 'axios';

export const newsAPI = axios.create({
  baseURL: 'https://backend-platzi-news.herokuapp.com/api',
});
