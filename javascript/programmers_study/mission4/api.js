import { API_END_POINT } from "./utils/constants.js";

const request = async (url, option) => {
  try {
    const response = await fetch(url, option);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (e) {
    console.log(e);
  }
};

export const getTodo = async (userId) => {
  return await request(`${API_END_POINT}${userId}`, { 
    method: 'GET' 
  });
};

export const addTodo = async (userId, todoContent) => {
  return await request(`${API_END_POINT}${userId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(todoContent)
  });
};

export const deleteTodo = async (userId, todoId) => {
  return await request(`${API_END_POINT}${userId}/${todoId}`, {
    method: 'DELETE'
  });
};

export const deleteAllTodo = async (userId) => {
  return await request(`${API_END_POINT}${userId}/all`, {
    method: 'DELETE'
  });
};

export const toggleTodo = async (userId, todoId) => {
  return await request(`${API_END_POINT}${userId}/${todoId}/toggle`, {
    method: 'PUT'
  });
};

export const getUsers = async () => {
  return await request(`${API_END_POINT}users`, {
    method: 'GET'
  });
};
