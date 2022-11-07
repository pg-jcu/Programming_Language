// ThisType
// ThisType<TYPE>

interface IUserTT {
  name: string,
  getName: () => string
}

function makeJeong(methods: ThisType<IUserTT>) {
  return { name: 'jeong', ...methods } as IUserTT;
}

const makejeong = makeJeong({
  getName() {
    return this.name;
  }
});

makejeong.getName();