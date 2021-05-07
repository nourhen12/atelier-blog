
const router=require('express').Router();
const  userService= require('../services/user.service')();

 router.get('/',async function(req,res){
    let result=await userService.getAllUser();
    res.json(result);
 })

 router.post('/',async function(req,res){
     let _user=req.body;
     console.log('route :',_user);
     let result = await userService.addUser(_user);
    
     res.json(result);
 })

 module.exports=router;