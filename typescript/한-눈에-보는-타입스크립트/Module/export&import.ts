// Export & Import
export interface IUserEx {
  name: string;
  age: number;
}

export type MyTypeEx = string | number;

// import { IUserEx, MyTypeEx } from './...';

// CommonJS/AMD/UMD
// import ABC1 = require('abc1');
// import * as ABC2 from 'abc2';
// import ABC3 from 'abc3'; // "esModuleInterop": true