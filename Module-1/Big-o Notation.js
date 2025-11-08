// const startTime = performance.now();
// console.time("time");

const firstArray = [];
const secondArray = [];
for (let i = 0; i < 6000; i++) {
  if (i < 3000) {
    firstArray.push(i);
  }
  secondArray.push(i);
  console.log(i);
}

console.log("firstArray", firstArray.length);
console.log("secondArray", secondArray.length);

console.time("map1");
const firstUserList = firstArray.map((num) => ({ userId: num }));
console.timeEnd("map1");

console.time("map2");
const secondUserList = secondArray.map((num2) => ({ userId: num2 }));
console.timeEnd("map2");

console.time("find");
// const user = secondUserList.find((user) => user.userId === 5000);
const user = secondUserList[500];
console.timeEnd("find");

// const endTime = performance.now();
// console.log(`It tooks ${endTime - startTime} ms`);
// console.timeEnd("time");
