// Add toString to the dictionary

// solution
let dictionary = Object.create(null, {
    toString: {
        value() {
            return Object.keys(this).join();
        }
    }
});

// let dictionary = Object.create(null);

// dictionary.toString = function() {
//     return Object.keys(this).join();
// }

// Object.defineProperty(dictionary, "toString", {
//     enumerable: false
// });

// dictionary.apple = "Apple";
// dictionary.__proto__ = "test";

for (let key in dictionary) {
    console.log(key);
}

console.log(String(dictionary));