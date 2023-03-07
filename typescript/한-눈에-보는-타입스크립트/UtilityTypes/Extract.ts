// Extract
// Extract<TYPE1, TYPE2>

type TEx = string | number;
type UEx = number | boolean;

const aEx: Extract<TEx, UEx> = 123;
// const bEx: Extract<TEx, UEx> = true; // ts2322
// const cEx: Extract<TEx, UEx> = 'string'; // ts2322