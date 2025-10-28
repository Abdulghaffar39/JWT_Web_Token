const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt');
const userValue = require("../db/userSchema");
const saltRounds = 10;


async function signUp(req, res) {

    try {

        const { firstName, lastName, email, password } = req.body;

        bcrypt.genSalt(saltRounds, function (err, salt) {
            bcrypt.hash(myPlaintextPassword, salt, function (err, hash) {
                
                const user = { firstName, lastName, email, password: hash };

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



module.exports = { signUp };

