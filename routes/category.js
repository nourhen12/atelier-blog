const router=require('express').Router();
const  categoryService= require('../services/category.service')();

 router.get('/',async function(req,res){
    let result=await categoryService.getAllCategory();
    res.json(result);
 })

 router.get('/products/:id',async function(req,res){
  let result=await categoryService.getCategoryProducts(req.params.id);
  res.json(result);
})

 router.post('/',async function(req,res){
   
     let result = await categoryService.addCategory(req.body);
     res.json(result);
 })
 

 router.get('/:id', async function(req,res)
 {
   let response = await categoryService.getOneCategory(req.params.id);
   res.json(response);

 })

 router.put('/update/:id', async function(req,res)
 { 
  let response = await categoryService.updateCategory(req.params.id,req.body);
   res.json(response);

 })
 router.delete('/:id', async function(req,res)
 {
   let response = await categoryService.DeleteCategory(req.params.id);
   res.json(response);

 })

 module.exports=router;   