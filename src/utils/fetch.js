import { SECRET_AUTH } from './constants';

const fetchurl = (url, data = null) => {
  const headers = {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    Authorization: SECRET_AUTH
  };

  if (data) {
    return fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers,
      body: JSON.stringify(data)
    });
  }

  return fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers
  });
};

export default fetchurl;
