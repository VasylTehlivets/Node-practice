const users = require("./users");

console.log(users);

const { clienst } = require("./users");

console.log(clienst);

// const { getCurrentMonth } = require("./date");
// const currentMonth = getCurrentMonth();
// console.log(`Now ${currentMonth} month`);

const currentMonth = require("./date").getCurrentMonth();
console.log(`Now ${currentMonth} month`);
