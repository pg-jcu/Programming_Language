// Generic
function toArray<T>(a: T, b: T): T[] { // T: Type variable
  return [a, b];
}

toArray<number>(1, 2);
toArray<string | number>(1, '2');
// toArray<number>(1, '2'); // ts2345

// inference
toArray(1, 2);
toArray('1', '2');
// toArray(1, '2'); // ts2345