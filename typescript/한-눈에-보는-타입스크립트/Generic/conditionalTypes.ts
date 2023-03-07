// Conditional Types
// T extends U ? X : Y

type CT = string | number | boolean;

type MyCType<T> = T extends CT ? string : never;

interface ICTUser<T> {
  name: string;
  age: T extends CT ? number : never;
}

interface ICTUsers<T extends boolean> {
  name: string;
  age: T extends true ? string : number;
  isString: T;
}

type MyCTypes<T> = 
  T extends string ? 'Str' :
  T extends number ? 'Num' :
  T extends boolean ? 'Boo' :
  T extends undefined ? 'Und' :
  T extends null ? 'Nul' : 
  'Obj';

// infer
// T extends infer U ? X : Y

type MyInferType<T> = T extends infer R ? R : null;

const aa: MyInferType<number> = 123;

type ReturnInferType<T extends (...args: any) => any> = 
  T extends (...args: any) => infer R ? R : any;

function fnInfer(num: number) {
  return num.toString();
}

const bb: ReturnInferType<typeof fnInfer> = 'Hello';