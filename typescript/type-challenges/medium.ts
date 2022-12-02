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