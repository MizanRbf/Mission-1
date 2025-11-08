// Nested Array Flat
const num = [2, 4, 6, 4, [5, 3, 6, [4, 6, 4]]];
const flattedNum = num.flat(Infinity);
// console.log(flattedNum);

// ****************************************************

// Input
const tagsFromPosts = [
  ["javascript", "react", "css"],
  ["node", "express"],
  ["react", "css", "html"],
];
// Output
// Single Array without Duplicate

// Process
// TODO Flat => Nested array to single array
// TODO Set => New Object without Duplicate
// TODO Spreed => Make Array

const filterData = [...new Set(tagsFromPosts.flat())];
console.log(filterData);
