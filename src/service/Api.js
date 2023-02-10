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

// export const postUser = async obj => {
//   const selectedFile = document.getElementById('photoFile').files[0];
//   console.log(selectedFile);
//   const reqestObj = { ...obj.values, photo: selectedFile };
//   console.log(reqestObj);
//   setToken(obj.newToken);
//   const response = await axios.post(`/api/v1/users`, reqestObj);
//   return response.data;
// };

export const getUserByID = async id => {
  const response = await axios.get(`/api/v1/users/${id}`);
  return response.data;
};

export const getPositions = async () => {
  const response = await axios.get(`/api/v1/positions`);
  return response.data.positions;
};

export const postUser = async obj => {
  var formData = new FormData();
  var fileField = document.querySelector('input[type="file"]');
  formData.append('position_id', obj.values.position_id);
  formData.append('name', obj.values.name);
  formData.append('email', obj.values.email);
  formData.append('phone', obj.values.phone);
  formData.append('photo', fileField.files[0]);
  fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
    method: 'POST',
    body: formData,
    headers: { Token: obj.newToken },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if (data.success) {
        return data.success;
      } else {
        throw new Error();
      }
    })
    .catch(function (error) {
      console.log(error);
    });
};
