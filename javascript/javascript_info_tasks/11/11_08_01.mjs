// Rewrite using async/await

import fetch from "node-fetch";

async function loadJson(url) {
  const response = await fetch(url);

  if (response.status == 200) {
    let json = await response.json();
    return json;
  }

  throw new Error(response.status);
}

loadJson('https://javascript.info/no-such-user.json')
  .catch(console.log);