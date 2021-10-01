const Product = require("../model/productModel");

exports.addProduct = (req, res) => {
    const { name, companyName, tags, description, images } = req.body;

    if (!name || !companyName || !tags || !description) {
        return res.status(400).json({ err: "include all required feilds" });
    }

    const _product = new Product({
        name: name,
        companyName: companyName,
        tags: tags,
        description: description,
        images: images,
    });

    _product
        .save()
        .then((result) => {
            return res.json({ post: result });
        })
        .catch((err) => {
            console.log(err);
        });
};

exports.getallproduct = (req, res) => {
    Product.find()
        .then((result) => {
            return res.status(200).json({ result });
        })
        .catch((err) => {
            console.log(err);
        });
};

exports.getoneproduct = (req, res) => {
    const _id = req.params.id;

    Product.findOne({ _id }).then((result) => {
        return res.status(200).json({ result });
    });
};
