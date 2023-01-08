// Prefer tuple over array whenever appropriate
type Circle1 = (string | number)[];
const circle1: Circle1 = ['circle', 1.0];

type Circle2 = [string, number];
const circle2: Circle2 = ['circle', 1.0];

export {};
