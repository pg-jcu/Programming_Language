// Type assertion
function someFunc(val: string | number, isNumber: boolean) {
  if (isNumber) {
    // val.toFixed(2); // error
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