//  index signature

// interface TransactionObj {
//   readonly [index: string]: number;
// }

interface TransactionObj {
  readonly [index: string]: number;
  Pizza: number;
  Books: number;
  Job: number;
}

const todaysTransactions: TransactionObj = {
  Pizza: -10,
  Books: -5,
  Job: 50,
};

console.log(todaysTransactions.Pizza);
console.log(todaysTransactions["Pizza"]);

let prop: string = "Pizza";

console.log(todaysTransactions[prop]);

const todaysNet = (transactions: TransactionObj): number => {
  let total = 0;
  for (const transaction in transactions) {
    total += transactions[transaction];
  }
  return total;
};
console.log(todaysNet(todaysTransactions));
console.log(todaysTransactions["pi"]);

/* ------------------------------------ l ----------------------------------- */

interface Student {
  // [key: string]: string | number | number[] | undefined;
  name: string;
  GPA: number;
  classes?: number[];
}

const student: Student = {
  name: "Dig",
  GPA: 3.7,
  classes: [100, 200],
};

console.log(student.test);

for (const key in student) {
  console.log(`${key} : ${student[key as keyof Student]}`);
}

Object.keys(student).map((key) => {
  console.log(student[key as keyof typeof student]);
});

const logStudentKey = (student: Student, key: keyof Student): void => {
  console.log(`Student ${key} : ${student[key]}`);
};
logStudentKey(student, "name");

/* ------------------------------------ d ----------------------------------- */

// interface Income {
//   [key: string]: number;
// }

type Streams = "salary" | "bonus" | "sideHustle";
type Incomes = Record<Streams, number | string>;

const monthlyIncome: Incomes = {
  salary: 500,
  bonus: 100,
  sideHustle: 250,
};

for (const revenue in monthlyIncome) {
  console.log(monthlyIncome[revenue as keyof Incomes]);
}
