// The maximal salary

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function topSalary(salaries) {
    if (Object.keys(salaries).length !== 0) {
        let arr = Object.entries(salaries).sort((a, b) => b[1] - a[1]);

        return arr[0][0];
    }
    else {
        return null;
    }

    // solution
    // let maxSalary = 0;
    // let maxName = null;

    // Object.entries(salaries).forEach(([name, salary]) => {
    //     if (maxSalary < salary) {
    //         maxSalary = salary;
    //         maxName = name;
    //     }
    // })

    // return maxName;

    // Comments solution
    // return Object.keys(salaries).reduce((maxName, name) => salaries[maxName] > salaries[name] ? maxName : name, null);
}

console.log(topSalary(salaries));