const express = require("express");

const ctrl = require("../../controllers/auth");

const { validateBody, authenticate } = require("../../middlewares");

const { schemas } = require("../../models/user");

const router = express.Router();

//реєстрація:використовують signup або register
router.post("/register", validateBody(schemas.registerSchema), ctrl.register);

//авторизація або логін:використовують signin або login
router.post("/login", validateBody(schemas.loginSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);

router.post("/logout", authenticate, ctrl.logout);

module.exports = router;
