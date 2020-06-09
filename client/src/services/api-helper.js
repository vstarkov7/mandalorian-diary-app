const axios = require('axios');

const baseURLAdress = process.env.NODE_ENV === 'production' ?
  'https://mandalorian-diary-app.herokuapp.com/'
  :
  'http://localhost:3000';

const api = axios.create({
  baseURL: baseURLAdress
})

export const loginUser = async (loginData) => {
  const res = await api.post(`/auth/login`, { auth: loginData });
  localStorage.setItem('authToken', res.data.token);
  api.defaults.headers.common.authorization = `Bearer ${res.data.token}`;
  return res.data.user;
}

export const registerUser = async (registerData) => {
  const res = await api.post('/users', { user: registerData });
  localStorage.setItem('authToken', res.data.token);
  api.defaults.headers.common.authorization = `Bearer ${res.data.token}`;
  return res.data.user;
}

export const verifyUser = async () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    const res = await api.get('/auth/verify');
    return res.data;
  }
  return false
}

export const removeToken = () => {
  api.defaults.headers.common.authorization = null;
}



export const readAllTopic = async () => {
  const res = await api.get('/topics');
  return res.data;
}

export const readOneTopic = async (id) => {
  const res = await api.get(`/foods/${id}`);
  return res.data;
}

export const putPostTopic = async (topicId, id) => {
  const res = await api.get(`/topics/${topicId}/posts/${id}`)
  return res.data
}

export const findPostTopics = async (id) => {
  const res = await api.get(`/topics/posts/${id}`)
  return res.data
}

export const readAllPost = async (id) => {
  const res = await api.get(`/users/${id}/posts`);
  return res.data;
}

export const readOnePost = async (userId, id) => {
  const res = await api.get(`/users/${userId}/posts/${id}`);
  return res.data;
}

export const createPost = async (postData, id) => {
  const res = await api.post(`/users/${id}/posts`, { post: postData });
  return res.data;
}

export const updatePost = async (postData, userId, id) => {
  const res = await api.put(`/users/${userId}/posts/${id}`, { post: postData });
  return res.data;
}

export const destroyPost = async (userId, id) => {
  const res = await api.delete(`/users/${userId}/posts/${id}`);
  return res.data
}

