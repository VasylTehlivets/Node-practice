import users from "./users.js";

import { getCurrentMonth } from "./date/index.js";
const currentMonth = getCurrentMonth();
console.log(`Now ${currentMonth} month`);
