const express = require("express");
const cors = require("cors");

const booksRouter = require("./routes/api/books"); //експортуємо все з books

const app = express();

app.use(cors());

app.use("/api/books", booksRouter); // цей запис означає, якщо будь-який запит починається з /api/books , шукай його обробник тут: booksRouter

app.listen(3000);
