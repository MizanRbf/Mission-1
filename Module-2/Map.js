// const obj = {
//   nextLevel: { courseId: "level2" },
//   "Programming Hero": { courseId: "level1" },
//   true: { courseId: "level3" },
// };

// console.log(obj.nextLevel);
// console.log(obj["Programming Hero"]);
// console.log(obj.true);

// ************************************************

// const obj = {};
// obj.nextLevel = { courseId: "level2" };
// obj["Programming Hero"] = { courseId: "level1" };
// obj.true = { courseId: "level3" };

// console.log(obj);

// ************************************************

// const course1 = { name: "Programming Hero" };
// const course2 = { name: "Next Level Web Development" };

// const obj = {};
// obj.nextLevel = { courseId: "level2" };
// obj[course1] = { courseId: "level1" };
// obj[course2] = { courseId: "level2" };

// console.log(obj);

// *********************************************

// const course1 = { name: "Programming Hero" };
// const course2 = { name: "Next Level Web Development" };

// const map = new Map();
// map.set(course1, "level1");
// map.set(course2, "level2");

// map.clear();
// map.delete(course2);
// console.log(map.size);
// console.log(map.has(course1));
// map.forEach((key, value) => console.log("key", key, "value", value));
// map.forEach((value, key) => (key.name = "simple" + key.name));

// console.log(map);
// console.log([...map.keys()]);

// for (let key of map.keys()) {
//   key.name = "simple" + key.name;
// }
// console.log(map);

// console.log(map.entries());
