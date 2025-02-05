let js= "amazing";
//if (js=="amazing") alert('javascript is fun!');
console.log(20+1-3)

console.log('Shubhanan is ' + js);

let PI= 3.14;

let year;
console.log(year);
console.log(typeof year);

console.log(typeof null)        // this is a bug, not solved for legacy reasons



let age= 21;
age= 22;

const birthYear= 2002;
//birthYear= 2003;
//const job;

// mdn operator precedence
let x,y;
x = y = 25-10-5;
console.log(x,y)



const firstName= 'Shubhanan';
const lastName= 'Sharma'
const name= `I'm ${firstName} ${lastName}`;
console.log(name)

console.log(`String with 
multiple
lines`)



const inputYear='2000';
console.log(Number(inputYear), inputYear);
console.log(Number('Shubhanan'), typeof(NaN));

console.log('I am ' + 22 + ' years old');   // automatic type coercion
console.log('23'-'10'-5);       // - converts it into a number
console.log('23'+'10'+5);       // + converts it into a string
console.log('23'*'2')
console.log(2+3+4+'7')


// 5 falsy values: 0, '', undefined, null, NaN


console.log('18'==18);      // == does type coercion
console.log('18'===18);     // === doesn't do type coercion
console.log(18===18);
console.log(18!==18)

age= prompt('What is your age?');
console.log(age, typeof age)


age=22;
console.log(`I like to drink ${age>=18 ? 'beer' : 'water'}`)