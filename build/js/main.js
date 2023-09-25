"use strict";
//? type alias
//? literal types
let myName;
let userName;
userName = "jhon";
//? function
const sum = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg("hi");
logMsg(sum(1, 2));
logMsg(sum(5, 1));
let subtract = function (c, d) {
    return c - d;
};
// interface mathFunction {
//   (a: number, b: number): number;
// }
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(213, 32));
//? optional parameter
const addAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 3, 5));
logMsg(sumAll(4, 1));
logMsg(sumAll(undefined, 2));
// ? rest parameters
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(12, 13, 14, 15));
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
// custom type guard
const isNumber = (value) => {
    return typeof value === "number" ? true : false;
};
// use of never typee
const numberOrString = (value) => {
    if (isNumber(value))
        return "string";
    if (isNumber(value))
        return "number";
    return createError("This should never happen!");
};
