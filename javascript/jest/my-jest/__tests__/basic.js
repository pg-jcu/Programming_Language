// toBe() -> primitive
test("1 + 1", () => {
  expect(1).toBe(1);
});

function getUser(id) {
  if (id <= 0) {
    throw new Error("Invalid ID");
  }

  return {
    id,
    email: `user${id}@test.com`,
  };
}

// toEqual() -> object
test("return a user object", () => {
  expect(getUser(1)).toEqual({
    id: 1,
    email: "user1@test.com",
  });
});

// toBeTruthy(), toBeFalsy()
test("number 0 is falsy but string 0 is truthy", () => {
  expect(0).toBeFalsy();
  expect("0").toBeTruthy();
});

// toHaveLength(), toContain()
test("array", () => {
  const colors = ["Red", "Yellow", "Blue"];
  expect(colors).toHaveLength(3);
  expect(colors).toContain("Yellow");
  expect(colors).not.toContain("Green");
});

// toMatch() -> regexp
test("string", () => {
  expect(getUser(1).email).toBe("user1@test.com");
  expect(getUser(2).email).toMatch(/.*test.com$/);
});

// toThrow() -> error
// expect()에 넘기는 검증 대상을 함수로 감싸줘야 한다.
test("throw when id is non negative", () => {
  expect(() => getUser(-1)).toThrow();
  expect(() => getUser(-1)).toThrow("Invalid ID");
});
