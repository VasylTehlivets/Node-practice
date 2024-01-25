const express = require("express");
const Joi = require("joi"); //додаємо joi, щоб перевіряти чи всі параметри записані в body при додавані книги(наприклад, напишемо тільки назву книги, без автора і вона додасться)

const books = require("../../models/books");

const { HttpError } = require("../../helpers");

const router = express.Router();

//створюємо, щоб при додавані книги, записувалися всі поля тіла(body)
const addSchema = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required(),
});

router.get("/", async (req, res, next) => {
  try {
    const result = await books.getAll();
    res.json(result);
  } catch (error) {
    // res.status(500).json({
    //   message: "Server error",
    // });
    //   Можна замінити на обробник помилок(зустрічається де 4 параметри, в app.js, статус - 500)
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await books.getById(id);
    if (!result) {
      /*  // Повторюється помилка(тут 404, знизу 500)
    //   return res.status(404).json({
    //     message: "Not found",
    //   });
       */
      ////////////////////
      /*  // Переписуємо:
      const error = new Error("Not found");
      error.status = 404;
        throw error;
        */
      // виносимо в окрему функцію в папку helpers і отримуємо:
      throw HttpError(404, "Not Found");
    }
    res.json(result);
  } catch (error) {
    // res.status(500).json({
    //   message: "Server error",
    // });
    //   Переписуємо:
    // const { status = 500, message = "Server error" } = error;
    // res.status(status).json({
    //   message,
    // });
    //і заміняємо на обробник помилок(має 4 параметри, зустрічається тільки в app.js де статус 500)
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    //Додаємо addSchema і валідацію
    const { error } = addSchema.validate(req.body);
    if (error) {
      throw HttpError(400, error.message);
    }
    const result = await books.add(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const { error } = addSchema.validate(req.body);
    if (error) {
      throw HttpError(400, error.message);
    }
    const { id } = req.params;
    const result = await books.updateById(id, req.body);
    if (!result) {
      throw HttpError(400, error.message);
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await books.deleteById(id);
    if (!result) {
      throw HttpError(400, error.message);
    }
    // res.status(204).send(); //видаляє, але немає тіла, тому не потрібно писати message(204 - No content)
    res.json({
      message: "Delete success",
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
