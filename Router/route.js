const express = require("express")
const { signUp, home } = require("../Controller/auth");
const authrization = require("../Middleware/authentication")


const router = express.Router();

router.post("/signUp", signUp)
router.post("/home", authrization , home)


module.exports = router
