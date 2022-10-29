// Overloads
function add(a: string, b: string): string; // overload signatures
function add(a: number, b: number): number; // overload signatures
function add(a: any, b: any): any { // implementation signature
  return a + b;
}

// add('hello', 2); // error

interface IUserOverload {
  name: string,
  age: number,
  getData(x: string): string[];
  getData(x: number): string;
}

let userOL: IUserOverload = {
  name: 'jeong',
  age: 30,
  getData: (data: any) => {
    if (typeof data === 'string') {
      return data.split('');
    } else {
      return data.toString();
    }
  }
};

// userOL.getData(false); // error