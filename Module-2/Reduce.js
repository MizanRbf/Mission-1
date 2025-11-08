// array.reduce((accumulator, currentValue) => {
//   return newAccumulatorValue;
// }, initialValue);

const cartItems = [
  { id: 1, name: "Notebook", price: 120, quantity: 5 },
  { id: 2, name: "Pen", price: 20, quantity: 15 },
  { id: 3, name: "Backpack", price: 750, quantity: 3 },
  { id: 4, name: "Water Bottle", price: 180, quantity: 8 },
  { id: 5, name: "Calculator", price: 450, quantity: 2 },
];

const subTotal = cartItems.reduce((total, product) => {
  return total + product.price * product.quantity;
}, 0);
console.log(subTotal);

// ********************************
// who is best scorer here
const players = [
  { name: "Mizan", score: 22 },
  { name: "Rakib", score: 34 },
  { name: "Mazid", score: 54 },
  { name: "Sazid", score: 23 },
];

const bestScorer = players.reduce((bestPlayer, player) => {
  if (bestPlayer.score > player.score) {
    return bestPlayer;
  }
  return player;
}, players[0]);

console.log(bestScorer.name);
