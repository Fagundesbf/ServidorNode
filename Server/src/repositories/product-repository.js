'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = () => {
    return Product
        .find({
            active: true
        }, 'title price slug');
}

exports.getBySlug = (slug) => {
    return Product
        .findOne({
            slug: req.params.slug,
            active: true // listar apenas produtos ativos
        }, 'title price slug tags') //buscar pelo titulo preço slug  e tags
}

exports.getById = (id) => {
    return Product
        .findById(id); //buscar pelo titulo preço slug  e tags
}

exports.getByTag = (tag) => {
    return Product
        .find({
            tags: tag,
            active: true
        }, 'title description price slug tags') //buscar pelo titulo preço slug  e tags
}

exports.create = (data) => {
    var product = new Product(data);
    return product
        .save();
}

exports.update = (id, data) => {
    return Product
        .findByIdAndUpdate(id, {
            $set: {
                title: data.title,
                description: data.description,
                price: data.price,
                slug: data.slug
            }
        })
}

exports.delete = (id) => {
   return Product
        .findByIdAndDelete(id)
}