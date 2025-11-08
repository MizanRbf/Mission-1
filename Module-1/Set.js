const fruit = ["apple", "banana", "jackfruit", "banana", "berry"];

const set = new Set(fruit);
set.add("apple");
set.add("banana");
set.add("mango");
set.delete("mango");

// console.log(set);
// console.log(set.size);
// console.log(set.has("apple"));

// Brute Force
const removeDupArr = (arr) => {
  const newArr = [];
  arr.forEach((element) => {
    if (!newArr.includes(element)) {
      newArr.push(element);
    }
  });
  return newArr;
};
console.log(removeDupArr(fruit));

// Set Implementation
const removeDupSet = (arr) => {
  const set = new Set(arr);
  return Array.from(set);
};

console.log(removeDupSet(fruit));
