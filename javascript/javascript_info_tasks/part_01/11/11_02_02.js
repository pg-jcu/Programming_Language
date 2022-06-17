// Delay with a promise

function delay(ms) {
  return new Promise(function(resolve, reject) {
      setTimeout(() => resolve(), ms);
  });

  // solution
  // return new Promise(resolve => setTimeout(resolve, ms));
}

delay(3000).then(() => console.log('runs after 3 seconds'));