// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const { list, detail } = require('../controllers/product')

/*** GET ALL PRODUCTS ***/ 
router.get('/productos', list); 


/*** GET ONE PRODUCT ***/ 
router.get('/detalle/:id', detail); 



module.exports = router;
