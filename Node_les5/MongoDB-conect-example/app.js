//login: Vasyl
//password: dMF3WPZ6dyzeaG1U

const mongoose = require("mongoose");

const DB_HOST =
  "mongodb+srv://Vasyl:dMF3WPZ6dyzeaG1U@cluster0.xxrvl9n.mongodb.net/books_reader?retryWrites=true&w=majority";

mongoose.set("strictQuery", true); // це не обовязково, в новій версії він може змінитися на false, щоб не змінився прописуємо true

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log("Database conect success");
  })
  .catch((error) => {
    console.log(error.message);
  });
