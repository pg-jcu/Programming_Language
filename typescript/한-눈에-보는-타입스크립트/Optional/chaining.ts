// Optional Chaining
function toString(str: string | undefined) {
  // return str.toString(); // ts2532
}

// Type Assertion
function toString(str: string | undefined) {
  return (str as string).toString();
}

function toString(str: string | undefined) {
  return str?.toString();
}