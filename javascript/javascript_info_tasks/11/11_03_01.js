// Promise: then versus catch

let promise = new Promise(function(resolve, reject) {
  resolve();
});

promise
  .then(() => { throw 'error'; })
  .catch(err => console.log(err));

promise
  .then(
    () => { throw 'error'; },
    err => console.log(err)
  );