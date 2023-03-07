type Team = "read" | "blue" | "yellow";
type Health = 1 | 5 | 10;

interface Player {
  readonly name: string;
  team: Team;
  health: Health;
}

interface AcePlayer extends Player {}

// type Player = {
//   name: string;
//   team: Team;
//   health: Health;
// };

// type AcePlayer = Player & {};

interface AcePlayer {
  isAce: boolean;
}

const jeong: AcePlayer = {
  name: "jeong",
  team: "blue",
  health: 5,
  isAce: true,
};

interface User {
  firstName: string;
  lastName: string;
  sayHi(name: string): string;
  fullName(): string;
}

interface Human {
  health: number;
}

class Korean implements User, Human {
  constructor( // can't use private, protected
    public firstName: string,
    public lastName: string,
    public health: number
  ) {}

  sayHi(name: string) {
    return `hi ${name}`;
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

export {};
