'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 0, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

///////////////////////////////////////////////
/*
// Strings
const airline = 'TAP Air Portugal';

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('portugal'));

// slice
console.log(airline.slice(4, 7));
console.log(airline.slice(1, -1));

// boxing- JS converts string primitive to string object to perform methods then convert back to primitive
console.log(typeof new String('jonas').slice(1)); // BTS this is happening

// case, trim
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

const loginEmail = '  Hello@Jonas.Io \n';
console.log(loginEmail.toLowerCase().trim());

// replace
const price = '288,97£';
console.log(price.replace('£', '$').replace(',', '.')); // replaces only first occurence (replaceAll)

// booleans
console.log(airline.includes('Air'));
console.log(airline.startsWith('Air'));

// split
const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

// padding
const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};
console.log(maskCreditCard(64637836));
console.log(maskCreditCard(43378463864647384));

// repeat
console.log('Bad weather...'.repeat(3));

//
for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} from ${from.toLocaleUpperCase().slice(0, 3)} to ${to
    .toLocaleUpperCase()
    .slice(0, 3)} (${time.replace(':', 'h')})`.padStart(45);
  console.log(output);
}
*/

///////////////////////////////////////////////
/*
// Maps
const rest = new Map();
rest.set('name', 'Classico Italiano');
console.log(rest.set(2, 'Lisbon, Portugal'));

console.log(rest.get('name'));

rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);

console.log([...rest]);
console.log([...rest.keys()]);
*/

///////////////////////////////////////////////
/*
// Sets
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

const commonFoods = italianFoods.intersection(mexicanFoods);
console.log('Intersection:', [...commonFoods]);
*/

///////////////////////////////////////////////
/*
// Looping Objects
const properties = Object.keys(restaurant.openingHours);
let openStr = `We are open on ${properties.length} days `;

for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// Property VALUES
const values = Object.values(restaurant.openingHours);
console.log(values);

// Entire object
const entries = Object.entries(restaurant.openingHours);
console.log(entries);

for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}
*/

///////////////////////////////////////////////
/*
// Optional Chaining (good for deeply nested objects)
console.log(restaurant.openingHours.fri?.open);
// console.log(restaurant.openingHours.mon.open);
console.log(restaurant.openingHours?.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
// const users = [];
console.log(users[0]?.name ?? 'User array empty');
*/

///////////////////////////////////////////////
/*
// for-of loop
const menu = [restaurant.starterMenu, restaurant.mainMenu];
for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}. ${el}`);
}
*/

///////////////////////////////////////////////
/*
// The Nullish Coalescing Operator
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
*/

///////////////////////////////////////////////
/*
// Short Circuiting (&&, ||)
console.log(3 || 'Jonas'); // || will immediately return  first value if it is truthy
console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// const guests = restaurant.numGuests ? restaurant.numGuests : 10;
const guests = restaurant.numGuests || 10; // if its undefined or null it will be set to 10
console.log(guests);

// &&
console.log(0 && 'Jonas'); // || will immediately return  first value if it is falsy

// if (restaurant.orderPizza) {
//     restaurant.orderPizza('mushrooms', 'spinach');
//   }
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
*/

///////////////////////////////////////////////
/*
// Spread Operator (...)
const arr = [4, 5, 6];
const newArr = [1, 2, 3, ...arr];
console.log(newArr);
console.log(...newArr);

// Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);

// Spread, coz on right side of =
const arr1 = [1, 2, ...[3, 4]];
// REST, coz on left side of = (rest must be last element)
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

// Destructuring
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Functions
const add = function (...nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) sum += nums[i];
  console.log(sum);
};

add(1, 3, 7);
add(1, 3, 7, 5, 1, 9, 2, 9);
const x = [2, 5, 7];
add(...x);
*/

///////////////////////////////////////////////
/*
// Destructuring objects
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});

//
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj); // we need to enclose it in a parenthesis
console.log(a, b);

// Nested objects
const {
  fri: { open: o, close: c },
} = restaurant.openingHours;
console.log(o, c);
*/

/////////////////////////////////////////////////
/*
// Destructuring Arrays
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/
