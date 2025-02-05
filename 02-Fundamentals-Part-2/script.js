"use strict"; // creates visible errors in console instead of failing

// Function declaration
// can be called before they are defined/declared in the code (due to hoisting)
const age1 = calcAge1(1991);
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

// Function expression
// function value stored in a variable
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);

// Arrow function
// don't have this keyword, good for 1 line of code
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);

console.log(age1, age2, age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};
console.log(yearsUntilRetirement(1991, "Rohan"));

// Arrays
const friends = ["Michael", "Steven", "Peter"];
console.log(friends);
console.log(friends[0]);

const y = new Array(1991, 1984, 2008, 2020);

const newLength = friends.push("Jay");
console.log(newLength, friends);
friends.unshift("John");
console.log(friends);

const popped = friends.pop();
console.log(popped, friends);
friends.shift("John");
console.log(friends);

console.log(friends.indexOf("Peter"));
console.log(friends.includes("Peter")); // includes doesn't do automatic type coercion

// Objects
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],

  // calcAge: function(birthYear){
  //     return 2037-birthYear;
  // }

  // calcAge: function(){
  //     return 2037-this.birthYear;
  // }

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
};
jonas.location = "Portugal";
console.log(jonas);
console.log(jonas.lastName);
console.log(jonas.calcAge());

const nameKey = "Name";
console.log(jonas["first" + nameKey]);

const interestedIn = prompt(
  "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends"
);
if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job, and friends"
  );
}

// Loops
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weight rep ${rep}`);
}
