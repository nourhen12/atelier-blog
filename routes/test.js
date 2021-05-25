const router=require('express').Router();
const  productService= require('../services/product.service')();
const  categoryService= require('../services/category.service')();


 router.post('/', async function (req, res) {
    const { product } = req.body;
  
    const newProduct = await Product.create(product);
  
    await Category.updateMany({ '_id': newProduct.categories }, { $push: { products: newProduct._id } });
  
    return res.send(newProduct);
  });
 


 
 router.delete('/:id', async function (req, res) {
    const _id = req.params.id;
    const product = await Product.findOne({ _id });
  
    await product.remove();
  
    await Category.updateMany({ '_id': product.categories }, { $pull: { products: product._id } });
  
    return res.redirect(product);
  
  });

 module.exports=router;   