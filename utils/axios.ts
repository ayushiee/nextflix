import axios, { AxiosInstance } from 'axios';

export default function getInstance(): AxiosInstance {
  return axios.create({
    baseURL: 'https://api.themoviedb.org/3',
  });
}
