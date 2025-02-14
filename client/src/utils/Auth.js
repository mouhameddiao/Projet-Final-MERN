import api from '../api';

export const login = async (username, password) => {
  const response = await api.post('/auth/login', { username, password });
  return response.data;
};

export const register = async (username, password, role) => {
  const response = await api.post('/auth/register', { username, password, role });
  return response.data;
};
