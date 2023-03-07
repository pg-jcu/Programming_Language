// Parameters
// function sub(x: number, y: number | undefined): number { ==
function sub(x: number, y?: number): number {
  return x - (y || 0);
}

// const sum = sub(2, undefined); ==
const sum = sub(2);