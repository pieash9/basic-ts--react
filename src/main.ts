type One = string;
type Two = string | number;
type Three = "hello";

let a: One = "hello";
let b = a as Two; // less specific
let c = a as Three; // more specific

let d = <One>"pi";
let e = <string | number>"pi";

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") return a + b;
  return "" + a + b;
};

let myVal: string = addOrConcat(12, 14, "add") as string;
let nextVal: number = addOrConcat(12, 14, "add") as number;

// 10 as string;
10 as unknown as string;

const img = document.querySelector("img")!;
const myImg = document.getElementById("#img") as HTMLImageElement;

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

const year = document.getElementById("year") as HTMLSpanElement;
const thisYear: string = new Date().getFullYear().toString();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
