// Input
const books = [
  { id: 1, title: "The Power of Habit", author: "Charles Duhigg" },
  { id: 2, title: "Atomic Habits", author: "James Clear" },
  { id: 3, title: "Deep Work", author: "Cal Newport" },
  { id: 4, title: "The Alchemist", author: "Paulo Coelho" },
  { id: 5, title: "Think and Grow Rich", author: "Napoleon Hill" },
];

// If I use "find function" here that will be Big-o notation O(n) which is waste case, that's why I should make a lookupTable

const lookupTable = books.reduce((table, book) => {
  table[book.id] = book;
  return table;
}, {});

console.log(lookupTable[5]);
