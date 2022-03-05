'use strict';

var currentT = 23;
console.log(currentT);
var x;
console.log(x);
currentT = "Changed to text";
console.log(currentT);
var str = "Some string";
var curStr = str;
str = "Something plus";
console.log(str);
console.log(curStr);
var e = -1.6e-4;
console.log(e);
console.log('******STANDARD CONSTANTS******');
var small = Number.EPSILON; // the smallest value that can be
// added to 1 to get a distinct number
// larger than 1, approx. 2.2e-16

var bigInt = Number.MAX_SAFE_INTEGER; // the largest representable integer

var max = Number.MAX_VALUE; // the largest representable number

var minInt = Number.MIN_SAFE_INTEGER; // the smallest representable integer

var min = Number.MIN_VALUE; // the smallest representable number

var nInf = Number.NEGATIVE_INFINITY; // the same as -Infinity

var nan = Number.NaN; // the same as NaN

var inf = Number.POSITIVE_INFINITY; // the same as Infinity

console.log(small);
console.log(bigInt);
console.log(max);
console.log(minInt);
console.log(min);
console.log(nInf);
console.log(nan);
console.log(inf);
var someVal = 23;
var intr = "New in ES6: ".concat(someVal); // Interpolation works only with backtick

console.log(intr);
var RED = Symbol("RED COLOR SYMBOL");
var ORANGE = Symbol("RED COLOR SYMBOL");
console.log(RED === ORANGE);
console.log(RED);
var car = {};
car.color = "Red";
var size = Symbol(222);
car[size] = 8;
car["MAKE"] = "Toyota";
console.log(car);
console.log(car.size);
console.log(car[size]);
x = 23;
console.log(x);
var y = 211; //y = 222;

var cat = {
  name: "Zoya",
  sex: "Female",
  classification: {
    kingdom: "Animalia",
    genus: "Felis",
    species: "catus"
  },
  tailLength: "30 cms"
};

cat.speak = function () {
  console.log("Saying Meow!");
};

cat.speak();
console.log(cat);
delete cat.tailLength;
console.log(cat);
var arr1 = [34, 45, 43, 32];
arr1[5] = 444;
console.log(arr1);
console.log(arr1.length);
var now = new Date();
console.log(now);
var halloween = new Date(2016, 9, 31); // note that months are
// zero-based: 9=October

var halloweenParty = new Date(2016, 9, 31, 19, 0); // 19:00 = 7:00 pm

console.log(halloweenParty.getFullYear()); // 2016

console.log(halloweenParty.getMonth()); // 9

console.log(halloweenParty.getDate()); // 31

console.log(halloweenParty.getDay()); // 1 (Mon; 0=Sun, 1=Mon,...)

console.log(halloweenParty.getHours()); // 19

console.log(halloweenParty.getMinutes()); // 0

console.log(halloweenParty.getSeconds()); // 0

console.log(halloweenParty.getMilliseconds()); // 0

console.log("END");