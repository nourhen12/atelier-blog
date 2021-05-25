const Category = require('../models/category-schema');
const Product = require('../models/product-schema');

async function addCategory(category) {
    try {
        let result = await Category.create(category);
       return ({ message: "Category added succssfullty", payload: result });

    } catch (error) {
        return ({ message: "Add Category failed", payload: error });
    }

}

async function getCategoryProducts(id) {
    console.log(id);
    try {
        let products = await Product.find().where('id_category').equals(id);
        let message = { items: products, total: products.legth }
        return message;

    } catch (error) {
        return ({ message: "Get Productns Fail", payload: error });
    }
}

async function getlabel (id) {
    console.log(id);
    try {
        let products = await Product.find().where('id_category').equals(id);
        let message = { items: products, total: products.legth }
        return message;

    } catch (error) {
        return ({ message: "Get Productns Fail", payload: error });
    }
}

async function getCategoryProducts(id) {
    console.log(id);
    try {
        let products = await Product.find().where('id_category').equals(id);
        let message = { items: products, total: products.legth }
        return message;

    } catch (error) {
        return ({ message: "Get Productns Fail", payload: error });
    }
}


async function getAllCategory() {
    try {
        let categorys = await Category.find();
        let message = { items: categorys, total: categorys.legth }
        return message;

    } catch (error) {
        return ({ message: "Get All Category Fail", payload: error });
    }
}

async function getOneCategory(id){
  
   try {
        let category = await Category.findById({_id:id});
        let message = { items: category}
        return message;

    } catch (error) {
        return ({ message: "Get Category Fail", payload: error });
    }
}

async function updateCategory(id,category) {
  
    try {
        let updatedCategory = await Category.findByIdAndUpdate(id, category);
       return ({ message: "Category updated succssfullty", payload: updatedCategory });

    } catch (error) {
        return ({ message: "update Category failed", payload: error });
    }

}

async function DeleteCategory(id) {
  
    try {
        let deletedCategory = await Category.deleteOne({_id:id});
       return ({ message: `Category with _id=${id} has deleted`, payload: deletedCategory });

    } catch (error) {
        return ({ message:  `Error to delete Category with _id=${id}`, payload: error });
    }

}
module.exports =() => {
    return (
        {
            addCategory: addCategory,
            getAllCategory: getAllCategory,
            getOneCategory: getOneCategory,
            updateCategory: updateCategory,
            DeleteCategory:  DeleteCategory,
            getCategoryProducts: getCategoryProducts
        });
}