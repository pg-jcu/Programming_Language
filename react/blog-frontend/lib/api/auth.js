import client from "./client";

export const login = ({ username, password }) => 
  client.post('/api/auth/login', { username, password });

export const register = ({ username, password }) => 
  client.post('/api/auth/register', { username, password });

export const check = () => client.get('/api/auth/check');

// error
// export const login = ({ username, password }) => 
//   fetch('/api/auth/login', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json;charset=UTF-8'
//     },
//     body: JSON.stringify({ username, password })
//   })
//   .then(response => response.json());

// export const register = ({ username, password }) => 
//   fetch('/api/auth/register', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json;charset=UTF-8'
//     },
//     body: JSON.stringify({ username, password })
//   })
//   .then(response => response.json());

// export const check = () => 
//   fetch('/api/auth/check')
//   .then(response => response.json());