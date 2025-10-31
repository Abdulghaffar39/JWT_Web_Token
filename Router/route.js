const express = require("express")
const { signUp, home, login } = require("../Controller/auth");
const authrization = require("../Middleware/authentication")


const router = express.Router();

router.post("/signUp", signUp);
router.post("/login", login);
router.post("/home", authrization , home);


module.exports = router
