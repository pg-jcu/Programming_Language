// Chrome 110, Safari 16.3, Node.js 20, Deno 1.31

// Array.prototype.toSorted
const languages = ["JavaScript", "TypeScript", "CoffeeScript"];

const sorted = [...languages].sort();
const newSorted = languages.toSorted();

// Array.prototype.toReversed
const numbers = [1, 2, 3, 4, 5];

const reversed = numbers.reverse();
const newReversed = numbers.toReversed();

// Array.prototype.toSpliced
const chars = ["a", "b", "c"];

const newSpliced = chars.toSpliced(1, 1, "d");

chars.splice(1, 1, "d");

const spliced = chars;

// Array.prototype.with
const names = ["John", "Tom", "Steve"];

const updated = names.with(0, "Sam");

names[0] = "Sam";

// Caution
class MyArray extends Array {}
const web = new MyArray("HTML", "CSS", "JS");

const lowcase = web.map((lang) => lang.toLowerCase());
console.log(lowcase instanceof MyArray); // => true

const newReversedWeb = web.toReversed();
console.log(newReversedWeb instanceof MyArray); // => false;
