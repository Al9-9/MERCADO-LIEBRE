// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

/*** GET ALL PRODUCTS ***/ 
router.get('/products', productsController.index); 


/*** GET ONE PRODUCT ***/ 
router.get('/:id/?', productsController.detail); 



module.exports = router;
