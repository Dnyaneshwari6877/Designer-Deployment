const express = require("express");
const router = express.Router();

const { signup, login, demo } = require("../controllers/Auth");

router.post("/signup", signup);
router.get("/demo", demo);
router.post("/login", login);

module.exports = router;
