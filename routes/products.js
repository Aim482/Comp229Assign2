var express = require('express');
var router = express.Router();
var productsController = require('../controllers/products.controller')

/* GET products listing. */
router
  .get('/', productsController.find)
  .post('/', productsController.save)
  .delete('/', productsController.delete);

router.put('/:_id', productsController.put)
router.delete('/:_id', productsController.delete)  
router.get('/:_id', productsController.find)
router.get('/:name', productsController.find)
router.get('/:name?keyword=kw', productsController.findbyName)

module.exports = router;
