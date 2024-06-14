function fetchUserCallback(id, callback) {
  setTimeout(() => {
    console.log("wait 0.1 sec.");
    const user = {
      id,
      name: `User${id}`,
      email: `${id}@test.com`,
    };
    callback(user);
  }, 100);
}

test("fetch a user", (done) => {
  fetchUserCallback(1, (user) => {
    expect(user).toEqual({
      id: 1,
      name: "User1",
      email: "1@test.com",
    });
    done();
  });
});

function fetchUserPromise(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("wait 0.1 sec.");

      if (typeof id !== "number") reject(new Error("id must be a number!"));

      const user = {
        id,
        name: `User${id}`,
        email: `${id}@test.com`,
      };
      resolve(user);
    }, 100);
  });
}

test("fetch a user (promise)", () => {
  return fetchUserPromise(1).then((user) => {
    expect(user).toEqual({
      id: 1,
      name: "User1",
      email: "1@test.com",
    });
  });
});

test("fetch a user (async)", async () => {
  const user = await fetchUserPromise(1);

  expect(user).toEqual({
    id: 1,
    name: "User1",
    email: "1@test.com",
  });
});

test("fetch a user (.resolves)", () => {
  return expect(fetchUserPromise(1)).resolves.toEqual({
    id: 1,
    name: "User1",
    email: "1@test.com",
  });
});

test("fetch a user (.rejects)", () => {
  return expect(fetchUserPromise("1")).rejects.toThrow("id must be a number!");
});
