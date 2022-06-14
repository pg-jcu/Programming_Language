// Error in setTimeout

new Promise(function(resolve, reject) {
  setTimeout(() => {
    throw new Error("Whoops!");
  }, 1000);
}).catch(console.log); // Will the .catch trigger? no, it won't