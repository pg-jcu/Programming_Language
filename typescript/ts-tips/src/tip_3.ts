// Use discriminated union instead of optional fields
// optional fields
type Shape1 = {
  kind: 'circle' | 'rect';
  radius?: number;
  width?: number;
  height?: number;
};

function getArea1(shape: Shape1) {
  return shape.kind === 'circle' ?
    Math.PI * shape.radius! ** 2 :
    shape.width! * shape.height!;
}

// discriminated union
type Circle = { kind: 'circle'; radius: number; };
type Rect = { kind: 'rect'; width: number; height: number; };
type Shape2 = Circle | Rect;

function getArea2(shape: Shape2) {
  return shape.kind === 'circle' ?
    Math.PI * shape.radius ** 2 :
    shape.width * shape.height;
}

export {};
