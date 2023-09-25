//? type alias

type stringOrNumber = string | number;
type stringOrNumberArray = (string | number)[];

type gt = {
  name?: string;
  active: boolean;
  album: stringOrNumberArray;
};

type userId = stringOrNumber;

//? literal types
let myName: "pieash";

let userName: "any" | "jhon" | "Kartus";

userName = "jhon";

//? function

const sum = (a: number, b: number): number => {
  return a + b;
};

const logMsg = (message: any): void => {
  console.log(message);
};

logMsg("hi");
logMsg(sum(1, 2));
logMsg(sum(5, 1));

let subtract = function (c: number, d: number): number {
  return c - d;
};

type mathFunction = (a: number, b: number) => number;
// interface mathFunction {
//   (a: number, b: number): number;
// }

let multiply: mathFunction = function (c, d) {
  return c * d;
};

logMsg(multiply(213, 32));

//? optional parameter

const addAll = (a: number, b: number, c?: number) => {
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};
const sumAll = (a: number = 10, b: number, c: number = 2) => {
  return a + b + c;
};

logMsg(addAll(2, 3, 5));
logMsg(sumAll(4, 1));
logMsg(sumAll(undefined, 2));

// ? rest parameters
const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr);
};

logMsg(total(12, 13, 14, 15));

const createError = (errMsg: string): never => {
  throw new Error(errMsg);
};

const infinite = () => {
  let i: number = 1;
  while (true) {
    i++;
    if (i > 100) break;
  }
};

// custom type guard
const isNumber = (value: any): boolean => {
  return typeof value === "number" ? true : false;
};

// use of never typee
const numberOrString = (value: number | string): string => {
  if (isNumber(value)) return "string";
  if (isNumber(value)) return "number";
  return createError("This should never happen!");
};
