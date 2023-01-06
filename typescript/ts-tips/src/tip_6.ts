// Use exhaustive checking to catch unhandled cases at compile time
type Circle = { kind: 'circle'; radius: number; };
type Rect = { kind: 'rect'; width: number; height: number; };
type Test = { kind: 'test'; size: number; };
type Shape = Circle | Rect | Test;

function getArea1(shape: Shape) {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2;
    case 'rect':
      return shape.width * shape.height;
    default:
      throw new Error('Unknown shape kind');
  }
}

function getArea2(shape: Shape) {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2;
    case 'rect':
      return shape.width * shape.height;
    default:
      // you'll get a type-checking error below
      // if any shape.kind is not handled above
      // const _exhaustiveCheck: never = shape; 
      throw new Error('Unknown shape kind');
  }
}

export {};
