import forEach from 'lodash/forEach';
import aes from 'crypto-js/aes';
import enc from 'crypto-js/enc-utf8';
import { SECRET_KEY } from './constants';

const AES_ENCRYPT = value => aes.encrypt(value, SECRET_KEY).toString();
const AES_DECRYPT = (value) => {
  const bytes = aes.decrypt(value, SECRET_KEY);

  return JSON.parse(bytes.toString(enc));
};
const FORMAT_USER_DATA = (user) => {
  const newUser = {};

  forEach(user, (value, key) => {
    if (key === 'confirm') {
      return;
    }

    if (key === 'password' || key === 'phone') {
      newUser[key] = AES_ENCRYPT(value);
    } else {
      newUser[key] = value.toLowerCase();
    }
  });

  return newUser;
};

export {
  AES_ENCRYPT,
  AES_DECRYPT,
  FORMAT_USER_DATA
};
