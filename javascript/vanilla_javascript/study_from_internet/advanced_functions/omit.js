function omit(obj, keys) {
  return Object.keys(obj)
    .filter(key => !keys.includes(key))
    .reduce((acc, key) => {
      acc[key] = obj[key];
      return acc;
    }, {});
}

const obj = {
  id: 1,
  name: 'Jeong',
  job: 'Engineer',
  twitter: 'https://www.twitter.com/seeyoujeong',
  website: 'https://seeyoujeong.github.io/',
};

const selected = omit(obj, ['id']);
console.log(selected);
