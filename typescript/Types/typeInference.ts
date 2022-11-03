// Type inference
let numInference = 12; // initialized variable
// numInference = 'Hello type!'; // ts2322

// parameters with default values
function addInfer(a: number, b = 2) {
  // function with return value
  return a + b;
}