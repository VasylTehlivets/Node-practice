const jwt = require("jsonwebtoken");

require("dotenv").config();

const { SECRET_KEY } = process.env;

const payload = {
  id: "6450053df8db9a32d82c5b66",
};

const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "23h" });
// console.log(token);

//розкодовка token
const decodeToken = jwt.decode(token);
// console.log(decodeToken);

try {
  const { id } = jwt.verify(token, SECRET_KEY);
  console.log(id);
  const invalidToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NTAwNTNkZjhkYjlhMzJkODJjNWI2NiIsImlhdCI6MTY4Mjk2OTc5MSwiZXhwIjoxNjgzMDUyNTkxfQ.-Z-_gdtogkd3M8H0r8X4my_3xJGjWfb7mvJFJkBMpoW";
  const result = jwt.verify(invalidToken, SECRET_KEY);
} catch (error) {
  console.log(error.message);
}
