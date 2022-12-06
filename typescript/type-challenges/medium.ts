// 2 - Get Return Type
type MyReturnType<T extends Function> = T extends (...args: any[]) => infer R ? R : never;

// 3 - Omit
type MyOmit<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P]
};

// 8 - Readonly 2
type MyReadonly2<T, K extends keyof T = keyof T> = {
  [P in keyof T as (P extends K ? never : P)]: T[P]
} & {
  readonly [P in K]: T[P]
};

// 9 - Deep Readonly
type DeepReadonly<T> = T extends Function ? 
  T : { readonly [key in keyof T]: DeepReadonly<T[key]> };

// 10 - Tuple to Union
type TupleToUnion<T extends unknown[]> = T[number];

// 12 - Chainable Options
type Chainable<R = {}> = {
  option<K extends string, V>(
    key: K extends keyof R ? never : K, 
    value: V)
    : Chainable<Omit<R, K> & { [key in K]: V }>,
  get(): R
};

// 15 - Last of Array
type Last<T extends any[]> = T extends [...infer _, infer L] ? L : never;
// type Last<T extends any[]> = [any, ...T][T['length']];

// 16 - Pop
type Pop<T extends any[]> = T extends [...infer R, infer _] ? R : [];
