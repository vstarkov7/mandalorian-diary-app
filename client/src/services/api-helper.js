const axios = require('axios');

const api = axios.create({
  baseURL: 'http://localhost:3000'
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

// export const createTopic = async (topicData) => {
//   const res = await api.post('/topics', { topic: topicData });
//   return res.data
// }

export const readAllPost = async (id) => {
  const res = await api.get(`/users/${id}/posts`);
  return res.data;
}

export const readOnePost = async (user_id, post_id) => {
  const res = await api.get(`/users/${user_id}/posts/${post_id}`);
  return res.data;
}

export const createPost = async (id, postData) => {
  const res = await api.post(`/users/${id}/posts`, { post: postData });
  return res.data;
}

export const updatePost = async (user_id, post_id, postData) => {
  const res = await api.put(`/users/${user_id}/posts/${post_id}`, { post: postData });
  return res.data;
}

export const destroyPost = async (user_id, post_id) => {
  const res = await api.delete(`/users/${user_id}/posts/${post_id}`);
  return res.data
}

