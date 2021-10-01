const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: {
            required: true,
            type: String,
        },
        email: {
            required: true,
            type: String,
        },
        hash_password: {
            required: true,
            type: String,
        },
    },
    { timestamps: true },
);

module.exports = mongoose.model("User", userSchema);
