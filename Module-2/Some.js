const numbers = [3, 5, 4, 2, 6];

const hasEvenNum = numbers.some((num) => num % 2 === 0);
// console.log(hasEvenNum);

// **********************************

const currentUserRoles = ["user", "editor", "admin"];
const userAccessRoles = ["admin", "manager"];

const canAccess = currentUserRoles.some((user) =>
  userAccessRoles.includes(user)
);
console.log(canAccess);
