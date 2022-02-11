
const Product = require("../models/Product")

//create product
createProduct = async (req, res) => {
    try {
        req.body["picture"] = req.file.filename;
        const newProduct = new Product(req.body)
        await newProduct.save()

        res.status(201).json({
            message: "Hurry! now product are successfully created.",
            data: newProduct,
            success: true
        });
    }
    catch (error) {
        res.status(400).json({
            message: error.message,
        })
    }
}

//get all product
allProduct = async (req, res) => {
    try {
        // 3eme etape de relation one to many .populate('category)
        const listProduct = await Product.find({}).populate('category');
        res.status(201).json({
            message: "List of Product",
            data: listProduct,
            success: true
        });
    } catch (error) {
        res.status(400).json({
            message: error.message,
        })
    }
}

//get Product by Id

productById = async (req, res) => {
    try {
        const product = await Product.findById({ _id: req.params.id }).populate('category');
        res.status(201).json({
            message: "category by id",
            data: product,
            success: true
        });
    } catch (error) {
        res.status(400).json({
            message: error.message,
        })
    }
}

//get Product by Name

productByName = async (req, res) => {
    try {
        const product = await Product.find({ ref: req.query.ref }).populate('category');
        res.status(201).json({
            message: "category by name",
            data: product,
            success: true
        });
    } catch (error) {
        res.status(400).json({
            message: error.message,
        })
    }

}
// get product by category
productByCategory =  async (req, res) => {
    try {
        const product = await Product.find({ category: req.query.category }).populate('category');
        res.status(201).json({
            message: "product by category",
            data: product,
            success: true
        });
    } catch (error) {
        res.status(400).json({
            message: error.message,
        })
    }
}

    // update Product
    updateProduct = async (req, res) => {
        try {
            await Product.updateOne({ _id: req.params.id }, (req.body)).populate('category');
            res.status(201).json({
                message: "updated!",
                success: true
            });
        } catch (error) {
            res.status(400).json({
                message: error.message,
            })
        }
    }
    // delete Product

    deleteProduct = async (req, res) => {
        try {
            await Product.deleteOne({ _id: req.params.id });
            res.status(201).json({
                message: "product deleted !",
                success: true
            });
        } catch (error) {
            res.status(400).json({
                message: error.message,
            })
        }

    }
    module.exports = { createProduct, allProduct, productById, productByName, updateProduct, deleteProduct, productByCategory}