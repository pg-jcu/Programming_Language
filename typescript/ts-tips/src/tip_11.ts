// Stay DRY by being creative with type manipulation
type User = {
  age: number;
  gender: string;
  country: string;
  city: string;
};
type Demographic = Pick<User, 'age' | 'gender'>;
type Geo = Pick<User, 'country' | 'city'>;

function createCricle() {
  return {
    kind: 'circle' as const,
    radius: 1.0,
  }
}

function transformCircle(circle: ReturnType<typeof createCricle>) {
  // ...
}

transformCircle(createCricle());

export {};
