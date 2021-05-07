 const router=require('express').Router();
const  productService= require('../services/product.service')();

 router.get('/',async function(req,res){
    let result=await productService.getAllProducts();
    res.json(result);
 })

 router.post('/',async function(req,res){
     let _product=req.body;
     console.log('route :',_product);
     let result = await productService.addProduct(_product);
    
     res.json(result);
 })

 module.exports=router;