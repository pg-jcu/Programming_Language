// Properties & Methods
interface IUserOp {
  name: string;
  age: number;
  isAdult?: boolean;
  validate?(): boolean;
}

type TUserOp = {
  name: string;
  age: number;
  isAdult?: boolean;
  validate?(): boolean;
};

abstract class CUserOp {
  abstract name: string;
  abstract age: number;
  abstract isAdult?: boolean;
  abstract validate?(): boolean;
}