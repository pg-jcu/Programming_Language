function pick(obj, keys) {
  return keys.reduce((acc, key) => {
    if (Object.hasOwn(obj, key)) {
      acc[key] = obj[key];
    }

    return acc;
  }, {});
}

const obj = {
  id: 1,
  name: 'Jeong',
  password: '82ada72easd7',
  role: 'admin',
  website: 'https://seeyoujeong.github.io/',
};

const selected = pick(obj, ['name', 'website']);
console.log(selected);
