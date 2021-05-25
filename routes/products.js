 const router=require('express').Router();
const  productService= require('../services/product.service')();
const  categoryService= require('../services/category.service')();

 router.get('/',async function(req,res){
    let result=await productService.getAllProducts();
    res.json(result);
 })

 router.post('/',async function(req,res){
   
     let result = await productService.addProduct(req.body);
     res.json(result);
 })
 

 router.get('/:id', async function(req,res)
 {
   let response = await productService.getOneProduct(req.params.id);
   res.json(response);

 })

 router.put('/update/:id', async function(req,res)
 { let product=req.body;
   let id_product=req.params.id;
  let response = await productService.updateProduct(id_product,req.body);
   res.json(response);

 })
 router.delete('/:id', async function(req,res)
 {
   let response = await productService.DeleteProduct(req.params.id);
   res.json(response);

 })

 module.exports=router;   