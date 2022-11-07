// Exclude
// Exclude<TYPE1, TYPE2>

type T = string | number;

const e: Exclude<T, number> = 'Only string';
// const v: Exclude<T, number> = 12; // ts2322

const z: T = 'String';
const n: T = 1234;