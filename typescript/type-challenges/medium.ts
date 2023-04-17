// 2 - Get Return Type
type MyReturnType<T extends Function> = T extends (...args: any[]) => infer R
  ? R
  : never;

// 3 - Omit
type MyOmit<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P];
};

// 8 - Readonly 2
type MyReadonly2<T, K extends keyof T = keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P];
} & {
  readonly [P in K]: T[P];
};

// 9 - Deep Readonly
type DeepReadonly<T> = T extends Function
  ? T
  : { readonly [key in keyof T]: DeepReadonly<T[key]> };

// 10 - Tuple to Union
type TupleToUnion<T extends unknown[]> = T[number];

// 12 - Chainable Options
type Chainable<R = {}> = {
  option<K extends string, V>(
    key: K extends keyof R ? never : K,
    value: V
  ): Chainable<Omit<R, K> & { [key in K]: V }>;
  get(): R;
};

// 15 - Last of Array
type Last<T extends any[]> = T extends [...infer _, infer L] ? L : never;
// type Last<T extends any[]> = [any, ...T][T['length']];
export {};

// 16 - Pop
type Pop<T extends any[]> = T extends [...infer R, infer _] ? R : [];

// 20 - Promise.all
type MyAwaited<T> = T extends Promise<infer R> ? R : T;

type UnPromise<T extends readonly unknown[]> = T["length"] extends 0
  ? []
  : T extends readonly [infer F, ...infer R]
  ? [MyAwaited<F>, ...UnPromise<R>]
  : T extends (infer U | Promise<infer P>)[]
  ? (U | P)[]
  : T;

declare function PromiseAll<T extends unknown[]>(
  values: readonly [...T]
): Promise<UnPromise<T>>;

// 62 - Type Lookup
type LookUp<U, T> = U extends { type: T } ? U : never;
// type LookUp<U, T> = Extract<U, { type: T }>

// 106 - Trim Left
type TrimLeft<S extends string> = S extends `${" " | "\t" | "\n"}${infer T}`
  ? TrimLeft<T>
  : S;

// 108 - Trim
type Whitespace = " " | "\n" | "\t";
type Trim<S extends string> = S extends
  | `${Whitespace}${infer T}`
  | `${infer T}${Whitespace}`
  ? Trim<T>
  : S;

// 110 - Capitalize
type MyCapitalize<S extends string> = S extends `${infer F}${infer R}`
  ? `${Uppercase<F>}${R}`
  : S;

// 116 - Replace
type Replace<
  S extends string,
  From extends string,
  To extends string
> = From extends ""
  ? S
  : S extends `${infer F}${From}${infer R}`
  ? `${F}${To}${R}`
  : S;

// 119 - ReplaceAll
type ReplaceAll<
  S extends string,
  From extends string,
  To extends string
> = From extends ""
  ? S
  : S extends `${infer F}${From}${infer R}`
  ? `${F}${To}${ReplaceAll<R, From, To>}`
  : S;

// 191 - Append Argument
type AppendArgument<Fn extends (...args: any[]) => any, A> = Fn extends (
  ...args: infer Args
) => infer R
  ? (...args: [...Args, A]) => R
  : never;

// 3192 - Reverse
type Reverse<T extends any[]> = T extends [infer First, ...infer Rest]
  ? [...Reverse<Rest>, First]
  : T;

// 4471 - Zip
type Zip<T extends any[], U extends any[]> = T extends [
  infer FirstT,
  ...infer RestT
]
  ? U extends [infer FirstU, ...infer RestU]
    ? [[FirstT, FirstU], ...Zip<RestT, RestU>]
    : []
  : [];
