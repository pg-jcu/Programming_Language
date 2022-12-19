let currentObserver = null;

const observe = fn => {
  currentObserver = fn;
  fn();
  currentObserver = null;
};

const observable = obj => {
  Object.keys(obj).forEach(key => {
    let _value = obj[key];
    const observers = new Set();

    Object.defineProperty(obj, key, {
      get() {
        if (currentObserver) observers.add(currentObserver);
        return _value;
      },

      set(value) {
        _value = value,
        observers.forEach(fn => fn());
      }
    });
  });

  return obj;
};

const state = observable({ a: 10, b: 20 });
observe(() => console.log(`a = ${state.a}`));
observe(() => console.log(`b = ${state.b}`));
observe(() => console.log(`a + b = ${state.a} + ${state.b}`));
observe(() => console.log(`a * b = ${state.a} * ${state.b}`));
observe(() => console.log(`a - b = ${state.a} + ${state.b}`));

state.a = 100;
state.b = 200;