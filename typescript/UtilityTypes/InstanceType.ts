// Instance Type
// InstanceType<TYPE>

class UserIT {
  constructor(public name: string) {}
}

class TestIT {
  constructor(public name: number) {}
}

const nameIT: InstanceType<typeof UserIT> = new UserIT('jeong');
// const testIT: InstanceType<typeof TestIT> = new UserIT('test'); // ts2322