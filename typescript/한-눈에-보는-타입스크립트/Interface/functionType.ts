// Call signature
// interface IName {
//   (PARAMETER: PARAM_TYPE): RETURN_TYPE
// }

interface IUser {
  name: string;
}

interface IGetUser {
  (name: string): IUser;
}

const getUser: IGetUser = function(n) { // n is name: string
  return user;
};

getUser('Jeong');