// Importing module

console.log('Importing module');
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(price, tq);

// console.log(shippingCost);

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js'; // importing default & named export (avoid both together)
// console.log(price);

import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 4);

console.log(cart); // it is a live connection (point to the same place in memory, not a copy)

///////////////////////////////////////
/*
// Top-Level Await (blocking)

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost(); // async function returns promise not data
console.log(lastPost);

// lastPost.then(last => console.log(last));    // Not very clean

const lastPost2 = await getLastPost();
console.log(lastPost2);
*/

///////////////////////////////////////
/*
// The Module Pattern

// IIFY function (instantly invoked once)
const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
    );
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);
console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost); // private properties not accessible
*/

///////////////////////////////////////
/*
// CommonJS Modules
// Export (won't work in browser but would work in node.js)
export.addTocart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(
    `${quantity} ${product} added to cart (sipping cost is ${shippingCost})`
  );
};

// Import
const { addTocart } = require('./shoppingCart.js');
*/

///////////////////////////////////////
/*
// cmd line
ls- show all files
cd- ..(go up 1 level), ../..(go up 2 levels)
clear/ctrl+c
mkdir- create folder
touch- create file
rmdir- delete folder (only empty ones) (another method- rm -R 'folder-name')
rm- delete file
mv- 'file-to-move' 'location' (eg. mv index.html ../)
*/

///////////////////////////////////////

// Introduction to NPM
// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};
const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone);
console.log(stateDeepClone);

// to download all the dependencies in the package.json file just use the command 'npm i'

// page doesn't refresh - code only parcel understands (not browser)
if (module.hot) {
  module.hot.accept();
}

console.log(cart.find(el => el.quantity >= 2));
Promise.resolve('TEST').then(x => console.log(x));

import 'core-js/stable';

// Polifilling async functions
import 'regenerator-runtime/runtime';
/*
import add, { cart } from '../final/shoppingCart.js';
*/
