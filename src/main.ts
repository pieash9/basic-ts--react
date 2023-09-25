class Coder {
  secondLang!: string;
  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string = "Typescript"
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }
  public getAge() {
    return `Hello I am ${this.age}`;
  }
}

const Pieash = new Coder("pieash", "rock", 23);

// console.log(Pieash.getAge());
// console.log(Pieash.age);
// console.log(Pieash.lang);

class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number
  ) {
    super(name, music, age);
    this.computer = computer;
  }
  public getLang() {
    return `I write ${this.lang}`;
  }
}

const Sara = new WebDev("Mac", "sara", "Lofi", 25);
console.log(Sara.getLang());

/* ---------------------------------- space --------------------------------- */

interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Guitarist implements Musician {
  name: string;
  instrument: string;

  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }
  play(action: string): string {
    return `${this.name} ${action} the ${this.instrument}`;
  }
}

const Page = new Guitarist("Jimmy", "guitar");
console.log(Page.play("Strums"));

/* --------------------------------- static --------------------------------- */

class Peeps {
  static count: number = 0;

  static getCount(): number {
    return Peeps.count;
  }
  public id: number;

  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }
}

const P = new Peeps("P");
const Q = new Peeps("Q");
const R = new Peeps("R");

console.log(Peeps.count);
console.log(P.id);

/* ---------------------------------- bands --------------------------------- */

class Bands {
  private dataState: string[];
  constructor() {
    this.dataState = [];
  }
  public get data(): string[] {
    return this.dataState;
  }
  public set data(value: string[]) {
    if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
      this.dataState = value;
      return;
    } else throw new Error("Param is not a array of string");
  }
}

const MyBands = new Bands();
MyBands.data = ["Pk", "arthuhin"];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, "SadaNil"];
console.log(MyBands.data);
