const books = require("../models/books");

const { HttpError, ctrlWrapper } = require("../helpers");

// const getAll = async (req, res, next) => {
//   try {
//     const result = await books.getAll();
//     res.json(result);
//   } catch (error) {
//     next(error);
//   }
// };

// const getById = async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const result = await books.getById(id);
//     if (!result) {
//       throw HttpError(404, "Not Found");
//     }
//     res.json(result);
//   } catch (error) {
//     next(error);
//   }
// };

// const add = async (req, res, next) => {
//   try {
//     const { error } = addSchema.validate(req.body);
//     if (error) {
//       throw HttpError(400, error.message);
//     }
//     const result = await books.add(req.body);
//     res.status(201).json(result);
//   } catch (error) {
//     next(error);
//   }
// };

// const updateById = async (req, res, next) => {
//   try {
//     const { error } = addSchema.validate(req.body);
//     if (error) {
//       throw HttpError(400, error.message);
//     }
//     const { id } = req.params;
//     const result = await books.updateById(id, req.body);
//     if (!result) {
//       throw HttpError(400, error.message);
//     }
//     res.json(result);
//   } catch (error) {
//     next(error);
//   }
// };

// const deleteById = async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const result = await books.deleteById(id);
//     if (!result) {
//       throw HttpError(400, error.message);
//     }
//     res.json({
//       message: "Delete success",
//     });
//   } catch (error) {
//     next(error);
//   }
// };

//Виносимо в helpers
const getAll = async (req, res) => {
  const result = await books.getAll();
  res.json(result);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await books.getById(id);
  if (!result) {
    throw HttpError(404, "Not Found");
  }
  res.json(result);
};

const add = async (req, res) => {
  const result = await books.add(req.body);
  res.status(201).json(result);
};

const updateById = async (req, res) => {
  const { id } = req.params;
  const result = await books.updateById(id, req.body);
  if (!result) {
    throw HttpError(400, error.message);
  }
  res.json(result);
};

const deleteById = async (req, res) => {
  const { id } = req.params;
  const result = await books.deleteById(id);
  if (!result) {
    throw HttpError(400, error.message);
  }
  res.json({
    message: "Delete success",
  });
};

module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  add: ctrlWrapper(add),
  updateById: ctrlWrapper(updateById),
  deleteById: ctrlWrapper(deleteById),
};
