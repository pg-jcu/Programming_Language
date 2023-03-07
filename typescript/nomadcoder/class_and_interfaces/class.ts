abstract class User {
  constructor(
    private firstName: string,
    private lastName: string,
    protected nickName: string
  ) {}

  abstract getNickName(): void

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Player extends User {
  getNickName() {
    console.log(this.nickName);
  }
}

const jeong = new Player('j', 'cu', 'seeyoujeong');

console.log(jeong.getFullName());
jeong.getNickName();

type Words = {
  [key: string]: string;
};

class Dict {
  private words: Words;

  constructor() {
    this.words = {};
  }

  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }

  del(term: string) {
    if (this.words.hasOwnProperty(term)) {
      delete this.words[term];
    }
  }

  modi(term: string, def: string) {
    if (this.words.hasOwnProperty(term)) {
      this.words[term] = def;
    }
  }

  def(term: string) {
    if (this.words.hasOwnProperty(term)) {
      return this.words[term];
    } else {
      return `${term} is not exist`;
    }
  }

  all() {
    for (const word in this.words) {
      console.log(word, this.words[word]);
    }
  }
}

class Word {
  constructor(
    public readonly term: string,
    public readonly def: string
  ) {}
}

const hello = new Word('hello', '안녕');
const hi = new Word('hi', '하이');
const dict = new Dict();

dict.add(hello);
console.log(dict.def('hello'));

dict.modi('hello', '헬로');
console.log(dict.def('hello'));

dict.add(hi);
dict.modi('fadfa', 'dfsdf');

dict.all();

dict.del('hello');
console.log(dict.def('hello'));


export {};
