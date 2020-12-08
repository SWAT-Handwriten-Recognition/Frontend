import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.jonastronco.xyz/',
});

export const apiCall = (route = '') => {
  return (variable = '') => `/${route}/${variable}`;
};
