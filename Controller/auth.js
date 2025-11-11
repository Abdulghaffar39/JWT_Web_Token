const jwt = require("jsonwebtoken");
const userValue = require("../db/userSchema");
const bcrypt = require("bcrypt");
const saltRounds = 10;

async function signUp(req, res) {
    try {
        // destructure
        const { fname, lname, email, password, role } = req.body;

        bcrypt.genSalt(saltRounds, function (err, salt) {

            bcrypt.hash(password, salt, function (err, hash) {

                const user = { fname, lname, email, password, role };

                const result = new userValue(user).save();
                return res.send({
                    message: "signup successfully",
                    result,
                    status: 200,
                });
            });
        });
    } catch (err) {
        res.send({
            err,
            status: 500,
            message: "sorry! server is not responding",
        });
    }
}

async function login(req, res) {
    // destructure
    try {
        const { email, password } = req.body;

        const dbUser = await userValue.findOne({ email });
        console.log(dbUser, "here is a user");

        // Load hash from your password DB.
        bcrypt.compare(password, dbUser.password, function (err, result) {
            // result == true

            if (result) {
                console.log(process.env.JWTSECRETKEY, "process.env.JWTSECRETKEY");
                let token = jwt.sign(
                    {
                        email: dbUser.email,
                        firstName: dbUser.fname,
                        "last name": dbUser.lname,
                        role: dbUser.role,
                    },
                    process.env.JWTSECRETKEY,
                    { expiresIn: "1d" }
                );

                res.send({
                    status: 200,
                    message: "user login successfully",
                    token,
                });
            }
        });
    } catch (err) {
        res.send({
            err,
            status: 500,
            message: "sorry! server is not responding",
        });
    }
}

async function home(req, res) {
    const { user } = req;
    console.log(user, "this is line 42");
    // destructure
    try {
        if (user.role === "admin") {
            res.send({
                status: 200,
                message: "Welcome Admin",
            });
        }
        res.send({
            status: 200,
            message: "Welcome user",
        });
    } catch (err) {
        res.send({
            err,
            status: 500,
            message: "sorry! server is not responding",
        });
    }
}

module.exports = { signUp, login, home};