// Any
let any: any = 123;
any = 'Hello world';
any = {};
any = null;

const list: any[] = [1, true, 'Anything!'];

// "noImplicitAny": true

// Unknown
let a: any = 123;
let u: unknown = 123;

let v1: boolean = a;
// let v2: number = u; // ts2322

let v3: any = u;
let v4: number = u as number;

// Object
let obj: object = {};
let arr: object = [];
let func: object = function() {};
// let nullValue: object = null; // ts2322
let data: object = new Date();

let userA: { name: string, age: number } = {
  name: 'jeong',
  age: 30
};

let userB: { name: string, age?: number } = {
  name: 'jeong',
  // age: false, // ts2322
  // email: 'example@gmail.com' // ts2322
};

interface IUserD {
  name: string,
  age?: number
}

let userC: IUserD = {
  name: 'jeong',
  age: 123
};

let userD: IUserD = {
  name: 'jeong',
  // age: false, // ts2322
  // email: 'example@gmail.com' // ts2322
};

// Null & Undefined
// let num1: number = undefined; // ts2322
// let str1: string = null; // ts2322
// let arr1: any[] = null; // ts2322
// let obj1: { a: 1, b: false } = undefined; // ts2322
// let und: undefined = null; // ts2322
// let nul: null = undefined; // ts2322
// let voi2: void = null; // ts2322
let voi1: void = undefined;

// "strictNullChecks" : true