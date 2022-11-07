// Class
class ExClass {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class ExClass1 extends ExClass {
  getName(): string {
    return `This class is ${this.name}.`;
  }
}

let exclass: ExClass1;
exclass = new ExClass1('test');
console.log(exclass.getName());