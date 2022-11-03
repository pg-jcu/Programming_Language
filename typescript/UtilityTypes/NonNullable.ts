// NonNullable
// NonNullable<TYPE>

type TNN = string | number | undefined | null;

const aNN: TNN = undefined;
const bNN: TNN = null;
// const cNN: NonNullable<TNN> = undefined; // ts2322
// const dNN: NonNullable<TNN> = null; // ts2322