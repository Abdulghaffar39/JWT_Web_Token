const jwt = require("jsonwebtoken")
const userValue = require("../db/userSchema");
const bcrypt = require('bcrypt');
const saltRounds = 10;



async function signUp(req, res) {

    try {

        // destructure
        const { firstName, lastName, email, password, role } = req.body;
        // console.log(firstName, lastName, email, password, "line 13");



        bcrypt.genSalt(saltRounds, function (err, salt) {
            bcrypt.hash(password, salt, function (err, hash) {

                const user = { firstName, lastName, email, password: hash, role };
                console.log(role);

                const result = new userValue(user).save();

                res.send({
                    message: 'SignUp Successfuly',
                    result,
                    status: 200,
                    role
                });

            });
        });

    }
    catch (err) {

        res.send({

            err,
            status: 500,
            message: "Sorry! Server is not responding"
        });

    };
};

async function login(req, res) {

    try {
        // destructure
        const { email, password } = req.body;



        const dbUser = await userValue.findOne({ email });
        console.log(dbUser, "here is a user");

        console.log(dbUser.role);
        // Load hash from your password DB.
        bcrypt.compare(password, dbUser.password, function (err, result) {
            // result == true

            if (result) {
                console.log(process.env.JWTSECRETKEY, "process.env.JWTSECRETKEY");
                let token = jwt.sign(
                    {
                        email: dbUser.email,
                        firstName: dbUser.firstName,
                        "last name": dbUser.lastName,
                        role: dbUser.role,
                    },
                    process.env.JWTSECRETKEY
                );
                console.log(token);
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
    console.log(user, "line num 48");

    try {

        if (user.role === "admin") {

            res.send({
                status: 200,
                message: "Welcome Admin"
            })
        } else if (user.role === "user") {

            res.send({
                status: 200,
                message: "Welcome user",
            });
        }


    }
    catch (err) {

        res.send({

            err,
            status: 500,
            message: "Sorry! Server is not responding"
        });

    };
};



module.exports = { signUp, home, login };

