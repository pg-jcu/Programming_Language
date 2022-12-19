// Store read dates

let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

let readMessagesDates = new WeakMap();

readMessagesDates.set(messages[0], new Date());

console.log(`When the message 0 was read: ${readMessagesDates.get(messages[0])}`)