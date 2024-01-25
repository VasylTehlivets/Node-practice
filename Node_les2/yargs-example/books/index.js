const fs = require("fs/promises");
const { nanoid } = require("nanoid");
const path = require("path");

const booksPath = path.join(__dirname, "books.json");
console.log(booksPath);

const getAll = async () => {
  // const data = await fs.readFile(booksPath, "utf-8");  //JSON.parse() - перетворює buffer -на масив обєктів
  const data = await fs.readFile(booksPath);
  return JSON.parse(data);
};

//Якщо використовуємо yargs, всюди де є id дописуємо String(id), бо він читає як число, а в нас id - строка
const getById = async (id) => {
  const bookId = String(id); //дописуємо
  const books = await getAll();
  const result = books.find((item) => item.id === bookId); // міняємо id на bookId
  return result || null;
};

const add = async (data) => {
  const books = await getAll();
  const newBook = {
    id: nanoid(),
    ...data,
  };
  books.push(newBook);
  await fs.writeFile(booksPath, JSON.stringify(books, null, 2));
  return newBook;
};

const updateById = async (id, data) => {
  const bookId = String(id); //дописуємо
  const books = await getAll();
  const index = books.findIndex((item) => item.id === bookId); // міняємо id на bookId
  if (index === -1) {
    return null;
  }
  books[index] = { id, ...data };
  await fs.writeFile(booksPath, JSON.stringify(books, null, 2));
  return books[index];
};

const deleteById = async (id) => {
  const bookId = String(id); //дописуємо
  const books = await getAll();
  const index = books.findIndex((item) => item.id === bookId); // міняємо id на bookId
  if (index === -1) {
    return null;
  }
  const [result] = books.splice(index, 1);
  await fs.writeFile(booksPath, JSON.stringify(books, null, 2)); //splice вирізає і повертає масив, тому ми його деструктизуємо і отримуємо видалену книгу
  return result;
};

module.exports = {
  getAll,
  getById,
  add,
  updateById,
  deleteById,
};
