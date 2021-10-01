const jwt = require("jsonwebtoken");
require("dotenv").config();

const User = require("../model/userModel");

module.exports = (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({ err: "you must be logged in" });
    }
    const token = authorization.replace("Bearer ", "");
    jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
        if (err) {
            return res.status(401).json({ err: "you must be logged in" });
        }
        const { _id } = payload;
        User.findById(_id).then((user) => {
            user.hash_password = undefined;
            req.user = user;
            next();
        });
    });
};
