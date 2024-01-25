const express = require("express");
const moment = require("moment"); // бібліотека moment для визначення точного часу запиту
const cors = require("cors"); //бібліотека cors дозволяє одночасно робити запити з бекенду і фронтенду
const fs = require("fs/promises");

const books = require("./books");

const app = express();

/*
//Створюємо middleware: middleware - підходить під всі запити
app.use((req, res, next) => {
  console.log("First middleware");
  next(); //Без next() запит далі не виконається
});

//middleware - може бути декілька, але треба незабувати писати next()
app.use((req, res, next) => {
  console.log("Second middleware");
  next();
});
*/

// middleware - потрібна для логування(це реєстрація(запис) всіз запитів, успішних і неуспішних)
//Приклад 1
app.use(async (req, res, next) => {
  const { method, url } = req;
  const date = moment().format("DD-MM-YYYY_hh:mm:ss");
  await fs.appendFile("./public/server.log", `\n${method} ${url} ${date}`);
  next();
});

// Викликаємо cors, щоб бекенд не відхиляв запити фронтенда
/*
// Довгий запис
const corsMiddleware = cors();
app.use(corsMiddleware);
*/
// Скорочений запис
app.use(cors());

app.get("/products", (req, res) => {
  res.json([]);
});

app.get("/books", (req, res) => {
  res.json(books);
});

//Приклад 2
// використовуємо middleware - щоб відповідь прийшла у json форматі
app.use((req, res) => {
  res.status(404).json({
    message: "Not found",
  });
});

app.listen(3000);
