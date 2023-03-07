export {};

type Person = {
  name: string;
  age?: number;
};

type Developer = Person & {
  skills: string[];
};

const person: Person = {
  name: 'jeong',
};

const expert: Developer = {
  name: 'jeong',
  skills: ['javascript', 'react'],
};

type People = Person[];
const people: People = [person, expert];

type Color = 'red' | 'orange' | 'yellow';
const color: Color = 'red';
const colors: Color[] = ['red', 'orange'];
