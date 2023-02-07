const js = import('./node_modules/@seeyoujeong/hello-wasm/hello_wasm.js');

js.then(js => {
  js.greet("WebAssembly");
});
