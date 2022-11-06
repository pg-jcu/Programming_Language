// OmitThisParameter
// OmitThisParameter<TYPE>

function getAge(this: typeof chan) {
  return this.age;
}

const chan = {
  age: 21
};

getAge.call(chan);

const wook = {
  age: '12'
};

// getAge.call(wook); // ts2345

const getAgeOTP: OmitThisParameter<typeof getAge> = getAge;
getAgeOTP.call(wook);