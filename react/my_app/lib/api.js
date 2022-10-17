export const getPost = (id) =>
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

export const getUsers = () =>
  fetch(`https://jsonplaceholder.typicode.com/users`);