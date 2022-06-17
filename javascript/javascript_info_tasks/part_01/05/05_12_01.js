// Turn the object into JSON and back

let user = {
    name: "John Smith",
    age: 35
};

let json = JSON.stringify(user);
console.log(json);

let jsonParse = JSON.parse(json);
console.log(jsonParse);