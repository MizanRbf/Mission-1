// Input
const rawApiData = [
  {
    id: 1,
    productName: "Wireless Mouse",
    category: "Electronics",
    price: 25.99,
    rating: 4.5,
    stock: 120,
  },
  {
    id: 2,
    productName: "Bluetooth Speaker",
    category: "Electronics",
    price: 49.99,
    rating: 4.7,
    stock: 85,
  },
  {
    id: 3,
    productName: "Running Shoes",
    category: "Fashion",
    price: 59.99,
    rating: 4.3,
    stock: 65,
  },
  {
    id: 4,
    productName: "Smart Watch",
    category: "Electronics",
    price: 129.99,
    rating: 4.6,
    stock: 40,
  },
  {
    id: 5,
    productName: "Leather Wallet",
    category: "Accessories",
    price: 19.99,
    rating: 4.2,
    stock: 200,
  },
  {
    id: 6,
    productName: "Gaming Keyboard",
    category: "Electronics",
    price: 89.99,
    rating: 4.8,
    stock: 35,
  },
  {
    id: 7,
    productName: "Cotton T-Shirt",
    category: "Fashion",
    price: 15.99,
    rating: 4.1,
    stock: 150,
  },
  {
    id: 8,
    productName: "Stainless Steel Water Bottle",
    category: "Home & Kitchen",
    price: 22.49,
    rating: 4.4,
    stock: 95,
  },
  {
    id: 9,
    productName: "Noise Cancelling Headphones",
    category: "Electronics",
    price: 199.99,
    rating: 4.9,
    stock: 25,
  },
  {
    id: 10,
    productName: "Yoga Mat",
    category: "Sports",
    price: 29.99,
    rating: 4.3,
    stock: 80,
  },
  {
    id: 11,
    productName: "Office Chair",
    category: "Furniture",
    price: 149.99,
    rating: 4.5,
    stock: 30,
  },
  {
    id: 12,
    productName: "LED Desk Lamp",
    category: "Home & Office",
    price: 34.99,
    rating: 4.6,
    stock: 60,
  },
  {
    id: 13,
    productName: "Backpack",
    category: "Accessories",
    price: 45.0,
    rating: 4.4,
    stock: 70,
  },
  {
    id: 14,
    productName: "Electric Kettle",
    category: "Home & Kitchen",
    price: 39.99,
    rating: 4.2,
    stock: 90,
  },
  {
    id: 15,
    productName: "Sunglasses",
    category: "Fashion",
    price: 25.49,
    rating: 4.0,
    stock: 110,
  },
  {
    id: 16,
    productName: "Bluetooth Earbuds",
    category: "Electronics",
    price: 79.99,
    rating: 4.5,
    stock: 55,
  },
  {
    id: 17,
    productName: "Ceramic Coffee Mug",
    category: "Home & Kitchen",
    price: 12.99,
    rating: 4.3,
    stock: 180,
  },
  {
    id: 18,
    productName: "Portable Charger",
    category: "Electronics",
    price: 29.99,
    rating: 4.6,
    stock: 75,
  },
  {
    id: 19,
    productName: "Fitness Tracker",
    category: "Electronics",
    price: 59.99,
    rating: 4.4,
    stock: 50,
  },
  {
    id: 20,
    productName: "Denim Jeans",
    category: "Fashion",
    price: 49.99,
    rating: 4.2,
    stock: 100,
  },
];

// Output => [{name: "product name"}, {name:"product name"}]

// Process
// TODO Filter => Electronics
// TODO Sort by => Ratings
// TODO Slice => Top 3
// TODO Map => Transform Array to Object

const topElectronicProducts = rawApiData
  .filter((item) => item.category === "Electronics")
  .sort((a, b) => a.rating - b.rating)
  .slice(0, 3)
  .map((product) => {
    return { name: product.productName };
  });

console.log(topElectronicProducts);

// **************************************

// Sort
const numbers = [4, 5, 3, 6, 1, 2];
const fruits = ["apple", "Banana", "mango", "jackfruit"];

const sortedNumbers = numbers.sort();
// console.log(numbers);

const sortedFruits = fruits.sort((a, b) => a.localeCompare(b));
// console.log(fruits);
