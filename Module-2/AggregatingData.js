// Input
const surveyResponse = [
  "A",
  "B",
  "C",
  "C",
  "A",
  "B",
  "A",
  "B",
  "C",
  "B",
  "A",
  "B",
];

// Output
// {A:4, B:5, C:3}

// Process
// TODO Initiate empty object
// TODO If the response already exist or not
// TODO if exists then increment the count
// TODO if not initialize it with 1

const count = surveyResponse.reduce((table, response) => {
  // if (table[response]) {
  //   table[response] = table[response] + 1;
  // } else {
  //   table[response] = 1;
  // }
  table[response] = (table[response] || 0) + 1;
  return table;
}, {});

console.log(count);

// ********************************

const sales = [
  {
    id: 1,
    category: "Electronics",
    item: "Headphones",
    price: 1200,
    quantity: 1,
  },
  { id: 2, category: "Books", item: "T-Shirt", price: 30, quantity: 2 },
  {
    id: 3,
    category: "Electronics",
    item: "Rice (5kg)",
    price: 25,
    quantity: 2,
  },
  { id: 4, category: "Home", item: "Notebook", price: 150, quantity: 1 },
  { id: 5, category: "Books", item: "Chair", price: 50, quantity: 1 },
  {
    id: 6,
    category: "Electronics",
    item: "Face Cream",
    price: 80,
    quantity: 1,
  },
];

const totalRevenue = sales.reduce((table, sale) => {
  const { category, price, quantity } = sale;
  if (!table[category]) {
    table[category] = {
      totalRevenue: 0,
      itemCount: 0,
    };
  }
  table[category].totalRevenue += price * quantity;
  table[category].itemCount += quantity;
  return table;
}, {});

console.log(totalRevenue);
