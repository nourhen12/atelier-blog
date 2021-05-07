const Product = require('../models/product-schema');

async function addProduct(_product) {
    try {
        let result = await Product.create(_product);
       return ({ message: "Product added succssfullty", payload: result });

    } catch (error) {
        return ({ message: "Add Product failed", payload: error });
    }

}

async function getAllProducts() {
    try {
        let products = await Product.find();
        let message = { items: products, total: products.legth }
        return message;

    } catch (error) {
        return ({ message: "Get All Productns Fail", payload: error });
    }
}

module.exports =() => {
    return (
        {
            addProduct: addProduct,
            getAllProducts: getAllProducts
        });
}