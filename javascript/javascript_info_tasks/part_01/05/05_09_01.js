// Sum the properties

function sumSalaries(salaries) {
    let sum = 0;

    for (let salary of Object.values(salaries)) {
        sum += salary;
    }

    return sum;

    // return Object.values(salaries).reduce((sum, salary) => sum += salary, 0);
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

console.log(sumSalaries(salaries));