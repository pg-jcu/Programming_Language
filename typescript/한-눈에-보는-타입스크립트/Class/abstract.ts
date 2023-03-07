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

// new AbstractClass(); // ts2511

const derivedclass = new DerivedClass('name');
console.log(derivedclass.getName());