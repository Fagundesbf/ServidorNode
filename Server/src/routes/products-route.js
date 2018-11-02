'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/products-controllers');

//Get
router.get('/', controller.get);

//GetBySlug
router.get('/:slug', controller.getBySlug); // recebendo parametro do slug

//GetById
router.get('/admin/:id', controller.getById); // recebendo parametro do id

//GetByTag
router.get('/tags/:tag', controller.getByTag); // recebendo parametro do id

//POST
router.post('/', controller.post);

//PUT
router.put('/:id', controller.put);

//DELETE
router.delete('/', controller.delete);


module.exports = router;