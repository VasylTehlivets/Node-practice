const express = require("express");

const ctrl = require("../../controllers/auth");

const { validateBody } = require("../../middlewares");

const { schemas } = require("../../models/user");

const router = express.Router();

//реєстрація:використовують signup або register
router.post("/register", validateBody(schemas.registerSchema), ctrl.register);

//авторизація або логін:використовують signin або login
router.post("/login", validateBody(schemas.loginSchema), ctrl.login);
module.exports = router;
