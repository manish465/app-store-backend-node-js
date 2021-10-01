const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const userRoute = require("./routes/auth");
const productRouts = require("./routes/products");

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

app.use("/api/users", userRoute);
app.use("/api/products", productRouts);

app.listen(port, () =>
    mongoose.connect(
        process.env.DB_URL,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        },
        (err) => {
            err
                ? console.log("something went wrong")
                : console.log("conneted to db");
        },
    ),
);
