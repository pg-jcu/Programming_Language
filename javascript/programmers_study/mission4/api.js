import { API_END_POINT } from "./constants.js";

export const getTodo = async (userId) => {
  try {
    const response = await fetch(`${API_END_POINT}${userId}`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (e) {
    console.log(e);
  }
};

export const addTodo = async (userId, todoContent) => {
  try {
    await fetch(`${API_END_POINT}${userId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todoContent)
    });
  } catch (e) {
    console.log(e);
  }
};

export const deleteTodo = async (userId, todoId) => {
  try {
    await fetch(`${API_END_POINT}${userId}/${todoId}`, {
      method: 'DELETE'
    });
  } catch (e) {
    console.log(e);
  }
};

export const deleteAllTodo = async (userId) => {
  try {
    await fetch(`${API_END_POINT}${userId}/all`, {
      method: 'DELETE'
    }); 
  } catch (e) {
    console.log(e);
  }
};

export const toggleTodo = async (userId, todoId) => {
  try {
    await fetch(`${API_END_POINT}${userId}/${todoId}/toggle`, {
      method: 'PUT'
    });
  } catch (e) {
    console.log(e);
  }
};

export const getUsers = async () => {
  try {
    const response = await fetch(`${API_END_POINT}users`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (e) {
    console.log(e);
  }
}
