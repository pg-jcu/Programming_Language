// Think in {Set}
type Measure = { radius: number };
type Style = { color: string };

// typed { radius: number; color: string }
type Circle = Measure & Style;

type ShapeKind = 'rect' | 'circle';

function getSomeString(): string {
  return 'getSomeString';
}

let foo: string = getSomeString();
let shape: ShapeKind = 'rect';

// disallowed because string is not subset of ShapeKind
// shape = foo; // ts2322

// allowed because ShapeKind is subset of string
foo = shape;

export {};
