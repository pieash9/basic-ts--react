"use strict";
class Coder {
    constructor(name, music, age, lang = "Typescript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello I am ${this.age}`;
    }
}
const Pieash = new Coder("pieash", "rock", 23);
// console.log(Pieash.getAge());
// console.log(Pieash.age);
// console.log(Pieash.lang);
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const Sara = new WebDev("Mac", "sara", "Lofi", 25);
console.log(Sara.getLang());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new Guitarist("Jimmy", "guitar");
console.log(Page.play("Strums"));
/* --------------------------------- static --------------------------------- */
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const P = new Peeps("P");
const Q = new Peeps("Q");
const R = new Peeps("R");
console.log(Peeps.count);
console.log(P.id);
/* ---------------------------------- bands --------------------------------- */
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
            this.dataState = value;
            return;
        }
        else
            throw new Error("Param is not a array of string");
    }
}
const MyBands = new Bands();
MyBands.data = ["Pk", "arthuhin"];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, "SadaNil"];
console.log(MyBands.data);
