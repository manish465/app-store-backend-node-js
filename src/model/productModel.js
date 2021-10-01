const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: { require: true, type: String },
    companyName: { require: true, type: String },
    tags: { require: true, type: Array },
    description: { require: true, type: String },
    images: {
        type: Array,
        default: [
            "https://www.google.com/imgres?imgurl=https%3A%2F%2Fmakitweb.com%2Fdemo%2Fbroken_image%2Fimages%2Fnoimage.png&imgrefurl=https%3A%2F%2Fmakitweb.com%2Fcheck-broken-image-jquery-ajax%2F&tbnid=D9qNVeBP9D2X_M&vet=12ahUKEwienLmo_NfvAhVt5XMBHfmTA3IQMygAegUIARDOAQ..i&docid=cIDLDCAiJaq_BM&w=300&h=300&q=default%20image&ved=2ahUKEwienLmo_NfvAhVt5XMBHfmTA3IQMygAegUIARDOAQ",
        ],
    },
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Product", productSchema);
