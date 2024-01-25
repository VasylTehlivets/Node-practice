const bcrypt = require("bcrypt");

const createHashPassword = async (password) => {
  //раніше треба було передавати 2-им аргументом salt, тепер можна зразу вписати "10"
  //   const salt = await bcrypt.genSalt(10);
  //   console.log(salt);
  //   const result = await bcrypt.hash(password, salt);
  const result = await bcrypt.hash(password, 10);
  //   console.log(result);
  //розшифровуємо
  const compareResult1 = await bcrypt.compare(password, result);
  console.log(compareResult1); //true
  const compareResult2 = await bcrypt.compare("123457", result);
  console.log(compareResult2); //false
};

createHashPassword("123456");
