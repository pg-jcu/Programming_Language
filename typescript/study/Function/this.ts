// this
// compile option -> strict: true or strictBindCallApply: true

interface IThis {
  name: string
}

const testThis: IThis = {
  name: 'test'
};

function someFn(greeting: string) {
  // console.log(`${greeting} ${this.name}`); // ts2683
}

function someFn1(this: IThis, greeting: string) {
  console.log(`${greeting} ${this.name}`);
}

someFn.call(testThis, 'Hello');