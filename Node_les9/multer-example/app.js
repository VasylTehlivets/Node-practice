const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs/promises");
const { nanoid } = require("nanoid");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public")); //передаємо файл на фронтенд

const tempDir = path.join(__dirname, "temp");

// Створюємо обєкт налаштувань
const multerConfig = multer.diskStorage({
  destination: tempDir,
  //деколи записуємо filename - якщо потрібно перейменувати file, тут пишемо для прикладу
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

// Далі створюємо middleware для зберігання
const upload = multer({
  storage: multerConfig,
});

const books = [];

app.get("/api/books", (req, res) => {
  res.json(books);
});
//Якщо очікуємо файли в різних полях, то пишемо:
// upload.fields([
//   { name: "cover", maxCount: 1 },
//   { name: "subcover", maxCount: 2 },
// ]);

//Якщо очікуємо 1 файл, пишемо upload.single("cover"), якщо багато файлів:
//upload.array("cover", 8)
const booksDir = path.join(__dirname, "public", "books");
app.post("/api/books", upload.single("cover"), async (req, res) => {
  // console.log(req.body);
  // console.log(req.file);
  //Кокретна назва файлу
  // await fs.rename("./temp/film.jpg", "./public/books/film.jpg");
  // Універсальна назва файлу:
  const { path: tempUpload, originalname } = req.file;
  const resultUpload = path.join(booksDir, originalname);
  await fs.rename(tempUpload, resultUpload);
  const cover = path.join("books", originalname);
  const newBook = {
    id: nanoid(),
    ...req.body,
    cover,
  };
  books.push(newBook);
  res.status(201).json(newBook);
});

app.listen(3000);
