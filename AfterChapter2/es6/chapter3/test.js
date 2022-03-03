'use strict';
let currentT = 23;
console.log(currentT);
let x;
console.log(x);
currentT = "Changed to text";
console.log(currentT);

let str = "Some string";
let curStr = str;

str = "Something plus";
console.log(str);
console.log(curStr);
const e = -1.6e-4;
console.log(e);

console.log('******STANDARD CONSTANTS******')
const small = Number.EPSILON;            // the smallest value that can be
                                         // added to 1 to get a distinct number
                                         // larger than 1, approx. 2.2e-16
const bigInt = Number.MAX_SAFE_INTEGER;  // the largest representable integer
const max = Number.MAX_VALUE;            // the largest representable number
const minInt = Number.MIN_SAFE_INTEGER;  // the smallest representable integer
const min = Number.MIN_VALUE;            // the smallest representable number
const nInf = Number.NEGATIVE_INFINITY;   // the same as -Infinity
const nan = Number.NaN;                  // the same as NaN
const inf = Number.POSITIVE_INFINITY;    // the same as Infinity

console.log(small);
console.log(bigInt);
console.log(max);
console.log(minInt);
console.log(min);
console.log(nInf);
console.log(nan);
console.log(inf);

let someVal = 23;
let intr = `New in ES6: ${someVal}`; // Interpolation works only with backtick
console.log(intr);

const RED = Symbol("RED COLOR SYMBOL");
const ORANGE = Symbol("RED COLOR SYMBOL");

console.log(RED === ORANGE);
console.log(RED);


let car = {}
car.color = "Red"
const size = Symbol(222)
car[size] = 8
car["MAKE"] = "Toyota"

console.log(car)