export {};

// 4 - Pick
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
};

// 7 - Readonly
type MyReadonly<T> = {
  readonly [K in keyof T]: T[K]
};

// 11 - Tuple to Object
type TupleToObject<T extends readonly (string | number)[]> = {
  [K in T[number]]: K
};

// 14 - First of Array
type First<T extends any[]> = T extends [] ? never : T[0];

// 18 - Length of Tuple
type Length<T extends readonly any[]> = T['length'];

// 43 - Exclude
type MyExclude<T, U> = T extends U ? never : T;

// 189 - Awaited
type MyAwaited<T extends PromiseLike<any>> = T extends PromiseLike<infer U> 
  ? U extends PromiseLike<any> ? MyAwaited<U> : U : never;

// 268 - If
type If<C extends boolean, T, F> = C extends true ? T : F;

// 533 - Concat
type Concat<T extends Array<any>, U extends Array<any>> = [...T, ...U];

// 898 - Includes
type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y
  ? 1
  : 2
  ? true
  : false;

type Includes<T extends readonly any[], U> = T extends [infer First, ...infer Rest]
  ? Equal<First, U> extends true ? true : Includes<Rest, U>
  : false;

// 3057 - Push
type Push<T extends any[], U> = [...T, U];

// 3060 - Unshift
type Unshift<T extends any[], U> = [U, ...T];

// 3312 - Parameters
type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer U) => any ? [...U] : any;