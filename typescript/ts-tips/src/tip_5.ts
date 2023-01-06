// Control how union types are distributed
type ToArray1<T> = T extends Array<unknown> ? T : T[];
type Foo = ToArray1<string | number>;

type ToArray2<T> = [T] extends [Array<unknown>] ? T : T[];
type Bar = ToArray2<string | number>;

export {};
