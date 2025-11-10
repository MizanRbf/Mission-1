// Stateless vs Stateful
// Function => Stateless

const counter = (amount) => {
  let count = 0;
  count = count + amount;
  return count;
};

// console.log(counter(3));
// console.log(counter(4));

// Object => Stateful

const counter2 = {
  count: 0,
  add(amount) {
    this.count = this.count + amount;
  },
  print() {
    console.log(this.count);
  },
};
counter2.add(3);
counter2.add(4);
// counter2.print();
