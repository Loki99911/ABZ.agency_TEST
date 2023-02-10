import axios from 'axios';

axios.defaults.baseURL = `https://frontend-test-assignment-api.abz.agency`;
// const KEY = 'd9a5502e7ecfc2f8fab8d65f4cbb6057';
export const setToken = token => {
  axios.defaults.headers.Token = token;
};

export const getToken = async () => {
  const response = await axios.get(`/api/v1/token`);
  return response.data;
};

export const getAllUsers = async page => {
  const response = await axios.get(`/api/v1/users?page=${page}&count=6`);
  return response.data;
};



export const postUser = async obj => {
    setToken(obj.newToken);
  const response = await axios.post(`/api/v1/users`, obj.values);
  return response.data;
};

export const getUserByID = async id => {
  const response = await axios.get(`/api/v1/users/${id}`);
  return response.data;
};

export const getPositions = async () => {
  const response = await axios.get(`/api/v1/positions`);
  return response.data.positions;
};

