// const jwt = require("jsonwebtoken")
const userValue = require("../db/userSchema");
const bcrypt = require('bcrypt');
const saltRounds = 10;



async function signUp(req, res) {

    try {
        // destructure
        const { firstName, lastName, email, password } = req.body;
        console.log(firstName, lastName, email, password, "line 13");
        
        bcrypt.genSalt(saltRounds, function (err, salt) {
            bcrypt.hash(password, salt, function (err, hash) {

                const user = { firstName, lastName, email, password: hash, role: "admin" };
                
                const result = new userValue(user).save();

                res.send({
                    message: 'SignUp Successfuly',
                    result,
                    status: 200,
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


async function home(req, res) {

    const { user } = req;
    console.log(user, "line num 48");

    try {

        if (user.role === "admin") {

            res.send({
                status: 200,
                message: "Welcome Admin"
            })
        }

        res.send({
            status: 200,
            message: "Welcome user",
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



module.exports = { signUp, home };

