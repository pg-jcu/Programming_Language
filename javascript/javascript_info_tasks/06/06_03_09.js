// Sort by field

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

function byField(fieldName) {
    if (fieldName === 'name') {
        return (a, b) => a.name > b.name ? 1 : -1;
    }

    if (fieldName === 'age') {
        return (a, b) => a.age > b.age ? 1 : -1;
    }

    if (fieldName === 'surname') {
        return (a, b) => a.surname > b.surname ? 1 : -1;
    }

    // solution
    // return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
}

console.log(users.sort(byField('name')));
console.log(users.sort(byField('age')));