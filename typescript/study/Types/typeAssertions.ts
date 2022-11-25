// Type assertion
function someFunc(val: string | number, isNumber: boolean) {
  if (isNumber) {
    // val.toFixed(2); // ts2339
    (val as number).toFixed(2);
    (<number>val).toFixed(2);
  }
}

(document.querySelector('.test') as HTMLDivElement).innerHTML;
(<HTMLDivElement>document.querySelector('.test')).innerHTML;

// Non-null assertion operator
function fnE(x: number | null | undefined) {
  return x!.toFixed(2);
}

document.querySelector('.test')!.innerHTML;

// as const
const string1 = 'typescript';
let string2 = 'typescript' as const;

const Colors = {
  red: "#FF0000",
  blue: "#0000FF",
  green: "#008000",
} as const;