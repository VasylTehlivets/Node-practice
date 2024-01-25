const express = require("express");

const books = require("../../data/books");

const router = express.Router();

// router.get("/api/books", (req, res) => {
//   res.json(books);
// });

// router.get("/api/books/:id", (req, res) => {
//   res.json(books[0]);
// });

// router.post("/api/books", (req, res) => {
//   res.json(books);
// });

// router.put("/api/books/:id", (req, res) => {
//   res.json(books);
// });

// router.delete("/api/books/:id", (req, res) => {
//   res.json(books);
// });

// якщо в арр.js адреса починається з /api/books, тут його вже не треба, залишаємо тільки /
router.get("/", (req, res) => {
  res.json(books);
});

router.get("/:id", (req, res) => {
  res.json(books[0]);
});

router.post("/", (req, res) => {
  res.json(books);
});

router.put("/:id", (req, res) => {
  res.json(books);
});

router.delete("/:id", (req, res) => {
  res.json(books);
});

module.exports = router;
