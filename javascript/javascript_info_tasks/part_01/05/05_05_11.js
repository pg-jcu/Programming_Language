// Get average age

function getAverageAge(users) {
    let sum = 0;
    users.forEach(user => {
        sum += user.age;
    });
    return sum / users.length;

    // return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}