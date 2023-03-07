// Use infer to create extra generic type parameters
type ResolvedPromise<T> = T extends Promise<infer U> ? U : T;
type t = ResolvedPromise<Promise<string>>;

type Flatten<T> = T extends Array<infer E> ? Flatten<E> : T;
type e = Flatten<number[][]>;

export {};
