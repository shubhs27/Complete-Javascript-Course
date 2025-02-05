'use strict';

/*
JavaScript
->high level
->garbage collected (mark-and-sweep algo)
->interpreted (just-in-time compilation)
->multi paradigm (procedural, object-oriented, functional)
->prototype-based object-oriencted (array inherits methods from prototype)
->first-class functions (functions treated as variables)
->dynamic (data type becomes known at runtime, automatically changed)
->single-threaded
->non-blocking event loop
*/

/*
Block scope 
->ES6 
->if-else, for, while
->only applies to let & const variables
->only in strict mode
*/

const name = 'Shubhanan';
let reassignment = 'old output';

if (true) {
  const name = 'Jonas';
  reassignment = 'new output';
  console.log(name);
}

console.log(name);
console.log(reassignment);

//////////////////////////////////////////
/*
Hoisting
->makes some types of variables accessible before they are actually declared.
->before execution, code is scanned for variable declarations, and for each variable, a new property is created in the variable environment object.

->function declarations, var variables are hoisted
->let, const variables are not hoisted (technically yes but not in practice as their initial value is <uninitialized> or placed in a TDZ)
*/
console.log(me);
var me = 'Jonas';

//for functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}
const addExpr = function (a, b) {
  return a + b;
};
var addArrow = (a, b) => a + b;

//////////////////////////////////////////
/*
TDZ (temporal dead zone)
->makes it easier to avoid and catch errors
->makes const variabes actually work (not undefined at start & later changed)
*/

if (true) {
  //console.log(`Jonas is a ${job}`);
  const age = 2037 - 1989;
  console.log(age);
  const job = 'teacher'; // above 3 lines are TDZ for job variable
}

// var variables are added to the window object
var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y || z === window.z);

//////////////////////////////////////////
/*
this keyword
->special variable created for every function, takes value of owner of the function
->not static. depends on how function is called, value assigned when function is actually called
->doesn't point to function itself & also not the variable environment

->method, this= <object calling the method>
->simple function call, this= undefined (in strict mode otherwise window)
->arrow functions, this= <this of surrounding function>(don't have own this)
->event listener, this= <DOM element that handler is attached to>
*/

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
//f();

// Arguments keyword (only in simple not arrow functions)
const addExp = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExp(2, 3);
addExp(2, 3, 4, 5);

//////////////////////////////////////////
// Object References
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  familiy: ['Alice', 'Bob'],
};

// Shallow copy
const jessicaCopy = { ...jessica }; // spread (not for arrays etc.)
jessicaCopy.lastName = 'Davis';

// jessicaCopy.familiy.push('Mary');
// jessicaCopy.familiy.push('John');

// console.log('Before:', jessica);
// console.log('After:', jessicaCopy);

// Deep copy/clone
const jessicaClone = structuredClone(jessica);
jessicaClone.familiy.push('Mary');
jessicaClone.familiy.push('John');

console.log('Original:', jessica);
console.log('Clone:', jessicaClone);
