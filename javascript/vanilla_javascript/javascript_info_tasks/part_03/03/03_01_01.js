// Fetch users from GitHub

async function getUsers(names) {
  let usersInfo = [];

  for (let username of names) {
    let response = await fetch(`https://api.github.com/users/${username}`)
      .then(successResponse => {
        if (successResponse.status != 200) {
          return null;
        } else {
          return successResponse.json();
        }
      },
      failResponse => {
        return null;
      });

    usersInfo.push(response);
  }

  let results = await Promise.all(usersInfo);

  return results;
}