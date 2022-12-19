// Is array copied?

let fruits = ["Apples", "Pear", "Orange"];

let shoppingCart = fruits;
shoppingCart.push("Banana");

console.log(fruits.length); // 4

// arrays are objects. So both shoppingCart and 
// fruits are the references to the same array.