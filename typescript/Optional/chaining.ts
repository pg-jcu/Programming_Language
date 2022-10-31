// Optional Chaining
// function toString(str: string | undefined) {
//   return str.toString(); // error
// }

// Type Assertion
function toString(str: string | undefined) {
  return (str as string).toString();
}

function toString(str: string | undefined) {
  return str?.toString();
}