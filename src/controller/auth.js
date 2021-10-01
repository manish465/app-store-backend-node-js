const bcrypt = require("bcryptjs");
const User = require("../model/userModel");
const jwt = require("jsonwebtoken");

require("dotenv").config();

exports.signin = (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ err: "enter all the feilds" });
    }

    User.findOne({ email }).then((user) => {
        if (!user) {
            return res.status(400).json({ err: "user not found" });
        }
        bcrypt
            .compare(password, user.hash_password)
            .then((result) => {
                if (result) {
                    const token = jwt.sign(
                        { _id: user._id },
                        process.env.JWT_SECRET,
                    );
                    res.status(201).json({ token });
                } else {
                    return res.status(422).json({ err: "invelid inputs" });
                }
            })
            .catch((err) => {
                console.log(err);
            });
    });
};

exports.signup = (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password)
        return res.status(400).json({ err: "enter all the feilds" });

    User.findOne({ email: req.body.email }).then((user) => {
        if (user)
            return res.status(400).json({
                error: "User already registered",
            });
        hash_password = bcrypt.hashSync(password, 10);
        const _user = new User({ name, email, hash_password });
        _user
            .save()
            .then(() => {
                res.status(201).json({ msg: "save complete" });
            })
            .catch((err) => {
                res.status(400).json({ msg: err.message });
            });
    });
};
