// Abstract
abstract class AbstractClass {
  abstract name: string;
  abstract getName(): string;
}

class DerivedClass extends AbstractClass {
  constructor(public name: string) {
    super();
  }
  getName() {
    return this.name;
  }
}

// new AbstractClass(); // error

const derivedclass = new DerivedClass('name');
console.log(derivedclass.getName());