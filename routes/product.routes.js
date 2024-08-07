const express = require('express');
const router = express.Router();
const {getAllProducts, getAllProductsTesting} = require('../controller/product.controller')

router.route('/').get(getAllProducts)
// router.route('/')
router.route('/testing').get(getAllProductsTesting)

module.exports = router