function compose(...funcs) {
  return function composed(...args) {
    return funcs.reduceRight((result, func) => [func.call(this, ...result)], args)[0];
  };
}

function addPrefix(str) {
  return "prefix-" + str;
}

function addSuffix(str) {
  return str + "-suffix";
}

function toUppercase(str) {
  return str.toUpperCase();
}

const decorated1 = compose(addPrefix, addSuffix, toUppercase);
const decorated2 = compose(toUppercase, addPrefix, addSuffix);

const result1 = decorated1("hello");
const result2 = decorated2("hello");

console.log(result1, result2);
