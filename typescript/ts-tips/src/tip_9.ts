// Control how general or specific the inferred types are
let foo = { name: 'foo' };
let bar = { name: 'bar' } as const;

let a = [1, 2];
let b = [1, 2] as const;

let circle1 = { kind: 'circle' as const, radius: 1.0 };

let shape: { kind: 'circle' | 'rect' } = circle1;

type NamedCircle = {
  radius: number;
  name?: string;
};

const circle2: NamedCircle = { radius: 1.0, name: 'yeah' };

// error because circle.name can be undefined
// console.log(circle2.name.length); // ts18048

// error because radius violates NamedCircle
// const wrongCircle = { radius: '1.0', name: 'ha' } satisfies NamedCircle; // ts2322

const circle3 = { radius: 1.0, name: 'yeah' } satisfies NamedCircle;

console.log(circle3.name.length);

export {};
