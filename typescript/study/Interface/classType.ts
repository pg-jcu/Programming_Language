// Class type
interface IUserClass {
  name: string;
  getName(): string;
}

class User implements IUserClass {
  constructor(public name: string) {}
  getName() {
    return this.name;
  }
}

const jeong = new User('Jeong');
jeong.getName();

// Construct signature
// interface IName {
//   new (PARAMETER: PARAM_TYPE): RETURN_TYPE
// }

interface ICat {
  name: string;
}

interface ICatConstructor {
  new (name: string): ICat;
}

class CatClass implements ICat {
  constructor(public name: string) {}
}

function makeKitten(c: ICatConstructor, n: string) {
  return new c(n);
}

const kitten = makeKitten(CatClass, 'Lucy');

// example
interface IFullName {
  firstName: string;
  lastName: string;
}
interface IFullNameConstructor {
  new(firstName: string): IFullName; // Construct signature
}

function makeSon(c: IFullNameConstructor, firstName: string) {
  return new c(firstName);
}

function getFullName(son: IFullName) {
  return `${son.firstName} ${son.lastName}`;
}

// Anderson family
class Anderson implements IFullName {
  public lastName: string;
  constructor(public firstName: string) {
    this.lastName = 'Anderson';
  }
}

const tomas = makeSon(Anderson, 'Tomas');
const jack = makeSon(Anderson, 'Jack');
getFullName(tomas); // Tomas Anderson
getFullName(jack); // Jack Anderson

interface IFullName1 {
  firstName: string;
  lastName: string;
  agentCode?: number;
}

interface IFullNameConstructor1 {
  new(firstName: string, agentCode: number): IFullName; // Construct signature
}

// Smith family
class Smith implements IFullName1 {
  public lastName: string;
  constructor(public firstName: string, public agentCode: number) {
    this.lastName = `Smith ${agentCode}`;
  }
}

function makeSon1(c: IFullNameConstructor1, firstName: string, agentCode: number) {
  return new c(firstName, agentCode);
}

function getFullName1(son: IFullName1) {
  return `${son.firstName} ${son.lastName}`;
}

const smith = makeSon1(Smith, 'John', 7);
getFullName1(smith); // John Smith 7