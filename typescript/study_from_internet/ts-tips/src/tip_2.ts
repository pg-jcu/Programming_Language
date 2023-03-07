// Understand declared type and narrowed type
function foo(x: string | number) {
  if (typeof x === 'string') {
    // x's type is narrowed to string, so .length is valid
    console.log(x.length);

    // assignment respects declaration type, not narrowed type
    // x = 1;
    // console.log(x.length); // disallowed because x is now number
  }
}

export {};
