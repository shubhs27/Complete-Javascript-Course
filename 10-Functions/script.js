'use strict';

///////////////////////////////////////
/*
// Default Parameters
const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', undefined, 1000); // to skip a default value

// JS only has pass by value (not pass by reference)
*/

///////////////////////////////////////
/*
// First-class functions (feature of language)
->js functions are values
->functions are just another 'type' of object
We can:
->store functions as variables or properties
->pass functions as argument to other functions (addEventListener)
->return functions from functions
->call methods on functions (bind)

// Higher-order functions (actually there in practice)
->a function that receives another function as an argument, that returns a new function or both
->only possible coz of first-class functions

->easier to split code
->abstraction
*/

/*
// Functions returning functions
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Jonas');

greet('Hello')('Jonas'); // greet('Hello') is basically a function taking 'Jonas' as argument

const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Hi')('Jonas');
*/

////////////////////////////////////////////
/*
// The call and apply Methods
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};
lufthansa.book(239, 'Jonas Schmedtmann');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Does NOT work as this is undefined in the function call below
// book(23, 'Sarah Williams');

// Call method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

// Apply method (not much used)
const flightData = [583, 'George Cooper'];
book.apply(eurowings, flightData); // takes array as arg
console.log(eurowings);

book.call(eurowings, ...flightData);

// Bind method- used to set the this keyword and other args
const bookEW = book.bind(eurowings);
bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schmedtmann');

// with event listener
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane); // this points to button element in eventListener
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 100));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));
*/

////////////////////////////////////////////
/*
// IIFE (immediately invoked function expression)
(function () {
    console.log('this will never run again');
})();

(() => console.log('this will also never run again'))();
*/

////////////////////////////////////////////
/*
// Closures
->variable environment(VE) of the execution context in which a function was created, even after that execution context is gone.
->gives a function access to all the variables of its parent function, even after that parent function is returned. the function keeps a reference to its outer scope, which preserves the scope chain throughout time.
->makes sure that a function doesn't lose connection to variables that existed at the function's birthplace.
->js feature that happens automatically. we can't access closed over variables explicitly.
*/

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();
console.dir(booker);

///////////////////////////////////////
// Example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

h(); // re-assigning f function (closure of f changes)
f();
console.dir(f);

// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000; // closure has priority over scope chain
boardPassengers(180, 3);
