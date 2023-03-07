type Player<T> = {
  name: string;
  extraInfo: T;
};

type JeongExtra = {
  favFood: string;
};

type JeongPlayer = Player<JeongExtra>;

const jeong: JeongPlayer = {
  name: 'jeong',
  extraInfo: {
    favFood: 'pasta',
  },
};
