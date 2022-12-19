// Using "this" in object literal

function makeUser() {
    return {
        name: "John",
        ref() {
            return this;
        },
    };
}

let user = makeUser();

console.log(user.ref().name);