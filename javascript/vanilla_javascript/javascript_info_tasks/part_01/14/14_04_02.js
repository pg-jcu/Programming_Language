// Explain the value of "this"

"use strict";

let obj, method;

obj = {
  go: function() { console.log(String(this)); }
};

obj.go();

(obj.go)();

(method = obj.go)();

(obj.go || obj.stop)();