// Pick
// Pick<TYPE, KEY>

interface IUserPick {
  name: string,
  age: number,
  email: string,
  isValid: boolean
}

type TKeyPick = 'name' | 'email';

const userPick: Pick<IUserPick, TKeyPick> = {
  name: 'jeong',
  email: 'aaa@test.com',
  // isValid: true // ts2322
};