// Use type predicate to avoid type assertion
type Circle = { kind: 'circle'; radius: number; };
type Rect = { kind: 'rect'; width: number; height: number; };
type Shape = Circle | Rect;

function isCircle(shape: Shape) {
  return shape.kind === 'circle';
}

function isRect(shape: Shape): shape is Rect {
  return shape.kind === 'rect';
}

function getShapes() {
  return [];
}

const myShapes: Shape[] = getShapes();

// error because typescript doesn't know the filtering
// const circles: Circle[] = myShapes.filter(isCircle);

// now you get Rect[] type inferred correctly
const rects = myShapes.filter(isRect);

export {};
