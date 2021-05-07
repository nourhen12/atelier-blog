var express = require('express');
const Product = require('../models/product-schema');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  Product.find()
  .then((products)=>{
    res.status(200).json(products);
  })
  .catch((err)=>{
    res.status(200).json(err);
  });
  

 // res.render('index', { title: 'Express' });
});

module.exports = router;
