 const router=require('express').Router();
const  commandService= require('../services/command.service')();


 router.get('/',async function(req,res){
    let result=await commandService.getAllCommand();
    res.json(result);
 })

 router.post('/',async function(req,res){
   
     let result = await commandService.addCommand(req.body);
     res.json(result);
 })
 

 router.get('/:id', async function(req,res)
 {
   let response = await commandService.getOneCommand(req.params.id);
   res.json(response);

 })

 router.put('/:id', async function(req,res)
 { 
  let response = await commandService.updateCommand(req.params.id,req.body);
   res.json(response);

 })
 router.delete('/:id', async function(req,res)
 {
   let response = await commandService.DeleteCommand(req.params.id);
   res.json(response);

 })

 module.exports=router;   