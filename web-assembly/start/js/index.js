var worker = new Worker("./js/wasm_worker.js");
// WebAssembly.Module.imports('./js/fib.wasm')
// .then(response => {
//   console.log(response)
//   response.arrayBuffer()
// })
var importObject = {
  imports: {
    imported_func: function(arg) {
      console.log(arg);
    }
  }
};

fetch('./js/build/optimized.wasm').then(response => {
  console.log(response)
  return response.arrayBuffer()
}).then(bytes => {
  console.log(bytes)
  return WebAssembly.instantiate(bytes, importObject)
}
).then(mod => {
  console.log(mod)
  console.log(mod.instance.exports.add(10, 11))
}
);
