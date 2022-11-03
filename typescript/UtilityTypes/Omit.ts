// Omit
// Omit<TYPE, KEY>

interface IUserOmit {
  name: string,
  age: number,
  email: string,
  isValid: boolean
}

type TKeyOmit = 'name' | 'email';

const userOmit: Omit<IUserOmit, TKeyOmit> = {
  age: 22,
  isValid: true,
  // name: 'jeong' // ts2322
}