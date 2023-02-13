import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://smtp-nodejs-server-for-mail.herokuapp.com/',
  // baseURL: 'http://localhost:3010',
});

const api = {
  createMessage(name, email, message) {
    return instance.post('sendMessage', { name, email, message });
  }
};

export default api;
