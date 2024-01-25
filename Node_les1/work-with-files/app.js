// 1.Callback
// const fs = require("fs");
// fs.readFile("./files/file.txt", (error, data) => {
//   console.log(error);
//   console.log(data);
// });

// 2.then()
// const fs = require("fs/promises");
// // const fs = require("fs").promises;
// fs.readFile("./files/file.txt")
//   .then((data) => console.log(data)) // console.log(data.toString())
//   .catch((error) => console.log(error));

// 3.async
const fs = require("fs/promises");
// const fs = require("fs").promises;

// Читаємо файл
const readFile = async () => {
  // 1.Варіант
  const text = await fs.readFile("./files/file.txt", "utf-8");
  console.log(text);
  // 2. Варіант
  //   const buffer = await fs.readFile("./files/file.txt");
  //   const text = buffer.toString();
  //   console.log(text);
};

readFile();

// Дописуємо файл
// const addText = async () => {
//   const result = await fs.appendFile("./files/file.txt", "Welcome to Node.js");
//   //   console.log(result);
// };

// addText();

// Якщо запишемо шлях до файлу, якого нема, то він створить його
// const addText = async () => {
//   const result = await fs.appendFile("./files/file2.txt", "Welcome to Node.js");
//   //   console.log(result);
// };

// addText();

// Переписуємо файл
const replaceFile = async () => {
  const result = await fs.writeFile("./files/file.txt", "Try it");
  //   console.log(result);
};

replaceFile();
