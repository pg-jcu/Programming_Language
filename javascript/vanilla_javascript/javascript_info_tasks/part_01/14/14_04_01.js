// Syntax check

let user = {
  name: "John",
  go: function() { console.log(this.name) }
}; // The error appears because a semicolon is missing

(user.go)()