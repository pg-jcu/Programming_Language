// ConstructorParameters
// ConstructorParameters<TYPE>

class UserCP {
  constructor(public name: string, private age: number) {}
}

const cpneo = new UserCP('Neo', 12);
const cpA: ConstructorParameters<typeof UserCP> = ['Neo', 12];
// const cpB: ConstructorParameters<typeof UserCP> = ['Lewis']; // ts2322