const Product = require('../models/product-schema');
const Category = require('../models/category-schema');

async function addProduct(_product) {
    try {
        let newProduct = await Product.create(_product);
        await Category.updateMany({ '_id': newProduct.categories }, { $push: { products: newProduct._id } });
  
       return ({ message: "Product added succssfullty", payload: newProdrct });

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


async function getOneProduct(id){
  
   try {
        let product = await Product.findById({_id:id});
        let message = { items: product}
        return message;

    } catch (error) {
        return ({ message: "Get Product Fail", payload: error });
    }
}

async function addProductToCategory(ProductId, category) {
    return Product.findByIdAndUpdate(
        ProductId,
      { $push: { categoris: category._id } },
      { new: true, useFindAndModify: false }
    );
  };
  

async function updateProduct(id,product) {
  
    try {
        let updatedProduct = await Product.findByIdAndUpdate(id, product);
       return ({ message: "Product updated succssfullty", payload: updatedProduct });

    } catch (error) {
        return ({ message: "update Product failed", payload: error });
    }

}

async function DeleteProduct(id) {
  
    try {
        let deletedProduct = await Product.deleteOne({_id:id});
       return ({ message: `product with _id=${id} has deleted`, payload: deletedProduct });

    } catch (error) {
        return ({ message:  `Error to delete product with _id=${id}`, payload: error });
    }

}
module.exports =() => {
    return (
        {
            addProduct: addProduct,
            getAllProducts: getAllProducts,
            getOneProduct: getOneProduct,
            updateProduct: updateProduct,
            DeleteProduct:  DeleteProduct
        });
}