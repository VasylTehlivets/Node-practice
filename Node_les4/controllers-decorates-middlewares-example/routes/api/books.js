const express = require("express");

const ctrl = require("../../controllers/books");

const { validateBody } = require("../../middlewares");

const schema = require("../../schemas/books");

const router = express.Router();

router.get("/", ctrl.getAll);

router.get("/:id", ctrl.getById);

router.post("/", validateBody(schema.addSchema), ctrl.add);

router.put("/:id", validateBody(schema.addSchema), ctrl.updateById);

router.delete("/:id", ctrl.deleteById);

module.exports = router;
