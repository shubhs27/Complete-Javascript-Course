'use strict';

///////////////////////////////////////
/*
// Constructor Functions and the new Operator
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this! (as each object will have this function)
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const jonas = new Person('Jonas', 1991);
const matilda = new Person('Matilda', 1995);
console.log(jonas);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

console.log(jonas instanceof Person);

Person.hey = function () {
  console.log('Hey there 👋');
  console.log(this);
};
Person.hey();
// jonas.hey():    // cannot be called (hey not in prototype of jonas object)
*/

///////////////////////////////////////
/*
// Prototypes
console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge(); // doesn't contain calcAge method

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(Person));
// .prototyeOfLinkedObjects

Person.prototype.species = 'Homo Sapiens'; // not own property
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));
*/

///////////////////////////////////////
/*
// Prototypal Inheritance on Built-In

console.log(jonas.__proto__);
console.log(jonas.__proto__.__proto__); // Object.prototype (top of prototype chain)
console.log(jonas.__proto__.__proto__.__proto__); // null

console.dir(Person.prototype.constructor);

const arr = [3, 6, 6, 5, 6, 9, 9]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

// extending prototype of an object is not good idea, new version of js might add method with same name
Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

const h1 = document.querySelector('h1'); // huge prototype chain
console.dir(x => x + 1);
*/

///////////////////////////////////////
/*
// ES6 Classes
// const PersonCl = class {}  // Class expression

// Class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods (will be added to .prototype property)
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    // _ to avoid naming conflict (for property which already exists)
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName; // to directly access property without _
  }

  // Static method (will NOT be added to .prototype property)
  static hey() {
    console.log('Hey there 👋');
    console.log(this); // points to entire class
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge(); // method
console.log(jessica.age); // property

console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
jessica.greet();

const walter = new PersonCl('Walter White', 1965);
// PersonCl.hey();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode
*/

///////////////////////////////////////
/*
// Setters and Getters  (use like a property not method)
const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  // needs to have exactly 1 parameter
  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);
*/

///////////////////////////////////////
/*
// Object.create
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  // manual way, different from constructor
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.birthYear = 2002;
steven.calcAge();
console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();
*/

///////////////////////////////////////
/*
// Inheritance Between "Classes": Constructor Functions

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  // Person(firstName, birthYear); // doesn't work as this keyword is undefined
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(
  mike instanceof Student && mike instanceof Person && mike instanceof Object
);

Student.prototype.constructor = Student; // otherwise its constructor is Person
console.dir(Student.prototype.constructor);
*/

///////////////////////////////////////
/*
// Inheritance Between "Classes": ES6 Classes

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first! (super is responsible for setting up the this keyword)
    // no need for constructor if child class has same parameters as parent
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();
*/

///////////////////////////////////////
/*
// Inheritance Between "Classes": Object.create

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();
*/

///////////////////////////////////////
/*
// Encapsulation: Private Class Fields and Methods

// 1. Public fields
// 2. Private fields
// 3. Public methods
// 4. Private methods
// STATIC version of these 4

class Account {
  // public fields
  locale = navigator.language;
  bank = 'Bankist';

  // private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // this.movements = [];
    console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public interface (API)
  getMovements() {
    return this.#movements;
    // Not chainable (can't return 2 things)
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  #approveLoan(val) {
    return true; // Fake method
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
    return this;
  }

  static #test() {
    console.log('static method');
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

// return this to make methods chainable
const movements = acc1
  .deposit(300)
  .withdraw(100)
  .withdraw(50)
  .requestLoan(25000)
  .withdraw(4000)
  .getMovements(); // at end as it's not chainable

console.log(acc1);
console.log(movements);
// console.log(acc1.#movements);
// acc1.#approveLoan(123);
// Account.#test(); // static methods called on class not object
*/
