// Type guards
function isNumber(val: string | number): val is number {
  return typeof val === 'number';
}

function someFunc1(val: string | number) {
  if (isNumber(val)) {
    val.toFixed(2);
    isNaN(val);
  } else {
    val.split('');
    val.toUpperCase();
    val.length;
  }
}

function someFuncTypeof(val: string | number) {
  if (typeof val === 'number') {
    val.toFixed(2);
    isNaN(val);
  } else {
    val.split('');
    val.toUpperCase();
    val.length;
  }
}

function someFuncIn(val: any) {
  if ('toFixed' in val) {
    val.toFixed(2);
    isNaN(val);
  } else if ('split' in val) {
    val.split('');
    val.toUpperCase();
    val.length;
  }
}

class Cat {
  meow() {}
}

class Dog {
  woof() {}
}

function sounds(ani: Cat | Dog) {
  if (ani instanceof Cat) {
    ani.meow();
  } else {
    ani.woof();
  }
}