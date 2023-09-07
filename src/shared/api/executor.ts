import Axios from 'axios';

export const APPLICATION_JSON = 'application/json';

console.log(process.env);

export const API = (baseURL: string = process.env.REACT_APP_API_HOST) =>
  Axios.create({
    baseURL,
    timeout: 30000,
    headers: {
      Accept: APPLICATION_JSON,
      'Content-Type': APPLICATION_JSON,
    },
  });
