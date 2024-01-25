const express = require("express");

const books = require("./books");

const app = express();

app.get("/books", (req, res) => {
  // res.send(books);
  res.json(books); //правильніше використовувати res.json

  // Приклад, чому
  // const databaseResponse = null;
  // res.send(databaseResponse);
  // res.json(databaseResponse);
});

app.listen(3000);
