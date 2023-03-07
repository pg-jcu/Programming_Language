type SuperReturn = <T, V>(arr: T[], b: V) => T;

const superReturn: SuperReturn = (arr) => arr[0];

const a = superReturn([1, 2, 3], 1);
const b = superReturn([true, false, true], false);
const c = superReturn(['1', 'b', '3'], 'a');
const d = superReturn([1, '2', true], []);
