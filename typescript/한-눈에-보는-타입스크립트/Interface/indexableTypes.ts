// Index signature
// interface INAME {
//   [INDEXER_NAME: INDAXER_TYPE]: RETURN_TYPE
// }

interface IItem {
  [itemIndex: number]: string | boolean | number[];
}

let item: IItem = ['Hello', false, [1, 2, 3]];

interface IUserIndex {
  [userProp: string]: string | boolean;
}

let userIndex: IUserIndex = {
  name: 'jeong',
  0: false,
  // num: 1 // ts2322
};
console.log(userIndex[0]);
console.log(userIndex['0']);

// keyof
interface ICountries {
  KR: '대한민국';
  US: '미국';
  JP: '일본';
}

let country: keyof ICountries; // 'KR' | 'US' | 'JP'
country = 'KR';
// country = 'CH'; // ts2322

let country1: ICountries[keyof ICountries]; //  ICountries['KR' | 'US' | 'JP']
country1 = '대한민국';
// country1 = '러시아'; // ts2322