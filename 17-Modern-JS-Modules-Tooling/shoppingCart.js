// Exporting module
console.log('Exporting module');

// Blocking code (code in script.js has to wait for this to finish executing)
// console.log('Start fetching users');
// await fetch('https://jsonplaceholder.typicode.com/users');
// console.log('Finish fetching users');

// exports always need to happen in top-level code (not inside a block)
// named exports (imports need curly braces)
const shippingCost = 10;
export const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;
export { totalPrice, totalQuantity as tq };

// default exports (when we only want to export 1 thing per module)
export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}
