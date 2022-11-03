// Parameters
// Parameters<TYPE>

function fn(a: string | number, b: boolean) {
  return `[${a}, ${b}]`;
}

const aP: Parameters<typeof fn> = [123, true];
// const bP: Parameters<typeof fn> = ['Hello', 123]; // ts2322