"use strict";
let a = "hello";
let b = a; // less specific
let c = a; // more specific
let d = "pi";
let e = "pi";
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
let myVal = addOrConcat(12, 14, "add");
let nextVal = addOrConcat(12, 14, "add");
// 10 as string;
10;
const img = document.querySelector("img");
const myImg = document.getElementById("#img");
// img.src;
// myImg.src;
// let year: HTMLElement | null;
// year = document.getElementById("year");
// let thisYear: string;
// thisYear = new Date().getFullYear().toString();
// if (year) {
//   year.setAttribute("datetime", thisYear);
//   year.textContent = thisYear;
// }
const year = document.getElementById("year");
const thisYear = new Date().getFullYear().toString();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
