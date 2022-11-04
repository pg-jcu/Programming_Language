// Return Type
// ReturnType<TYPE>

function fnRT(str: string) {
  return str;
}

const aRT: ReturnType<typeof fnRT> = 'string';
// const bRT: ReturnType<typeof fnRT> = 1234; // ts2322