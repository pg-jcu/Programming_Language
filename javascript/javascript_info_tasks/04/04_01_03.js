// Sum object properties

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
};

let sum = 0;

for (let teamMemberName in salaries) {
    sum += salaries[teamMemberName];
}

console.log(sum);