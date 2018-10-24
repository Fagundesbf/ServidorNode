'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/products-controllers');

//POST
router.post('/', controller.post);

//PUT
router.put('/:id', controller.put);

//DELETE
router.delete('/', controller.delete);


module.exports = router;