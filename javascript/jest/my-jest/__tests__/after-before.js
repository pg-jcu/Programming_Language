const data = {
  users: [],
};

const userService = {
  findAll() {
    return data.users;
  },
  create(user) {
    data.users.push(user);
  },
  remove(id) {
    data.users.splice(
      data.users.findIndex((user) => user.id === id),
      1
    );
  },
  update(id, user) {
    data.users[data.users.findIndex((user) => user.id === id)] = user;
  },
};

beforeEach(() => {
  data.users.push(
    { id: 1, email: "user1@test.com" },
    { id: 2, email: "user2@test.com" },
    { id: 3, email: "user3@test.com" }
  );
});

afterEach(() => {
  data.users = [];
});

test("find all users", () => {
  const users = userService.findAll();

  expect(users).toHaveLength(3);
  expect(users).toContainEqual({ id: 1, email: "user1@test.com" });
  expect(users).toContainEqual({ id: 2, email: "user2@test.com" });
  expect(users).toContainEqual({ id: 3, email: "user3@test.com" });
});

test("create a user", () => {
  const user = { id: "4", email: "user4@test.com" };

  userService.create(user);

  const users = userService.findAll();

  expect(users).toHaveLength(4);
  expect(users).toContainEqual(user);
});

test("remove a user", () => {
  const id = 3;
  const user = data.users.find((user) => user.id === id);

  userService.remove(id);

  const users = userService.findAll();

  expect(users).toHaveLength(2);
  expect(users).not.toContainEqual(user);
});
