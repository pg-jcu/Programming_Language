// Tuple
let tuple: [string, number] = ['a', 1]; // only Assign
let users: [number, string, boolean][] = [[1, 'str', true]];

tuple.push(3); // can't block
// tuple.push(true); // ts2345

// Enum
enum Week {
  Sun,
  Mon, 
  Tue,
  Wed = 25,
  Thu,
  Fri,
  Sat
}

console.log(Week.Mon);
console.log(Week.Sat);
console.log(Week[27]); // Reverse Mapping
console.log(Week['Tue']);

enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue'
}

console.log(Color.Green);
