/*
test("테스트 설명", () => {
  expect("검증 대상").toXxx("기대 결과");
});

toXxx : Test Matcher

Jest는 기본적으로 test.js로 끝나거나, __test__ 디렉터리 안에 있는 
파일들은 모두 테스트 파일로 인식한다.

특정 테스트 파일만 실행하고 싶은 경우 : npm test <파일명 및 경로>
*/

function getUser(id) {
  if (id <= 0) {
    throw new Error("Invalid ID");
  }

  return {
    id,
    email: `user${id}@test.com`,
  };
}

// toBe() -> primitive
test("1 + 1", () => {
  expect(1).toBe(1);
});

// toEqual() -> object
test("return a user object", () => {
  expect(getUser(1)).toEqual({
    id: 1,
    email: 'user1@test.com',
  });
});

// toBeTruthy(), toBeFalsy()
test("number 0 is falsy but string 0 is truthy", () => {
  expect(0).toBeFalsy();
  expect('0').toBeTruthy();
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
