'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

//GET
exports.get = (req, res, next) => {
    Product
        .find({
            active: true // listar apenas produtos ativos
        }, 'title price slug') //buscar pelo titulo preço e slug
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
}

//GET
exports.getBySlug = (req, res, next) => {
    Product
        .findOne({
            slug: req.params.slug,
            active: true // listar apenas produtos ativos
        }, 'title price slug tags') //buscar pelo titulo preço slug  e tags
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
}


//GET
exports.getById = (req, res, next) => {
    Product
        .findById(req.params.id) //buscar pelo titulo preço slug  e tags
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
}
//GET
exports.getByTag = (req, res, next) => {
    Product
        .find({
            tags: req.params.tag,
            active: true
        }, 'title description price slug tags') //buscar pelo titulo preço slug  e tags
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
}

//Post
exports.post = (req, res, next) => {
    var product = new Product(req.body);
    product
        .save()
        .then(x => {
            res.status(201).send({ message: 'Produto cadastrado com sucesso!' });
        }).catch(e => {
            res.status(400).send({
                message: 'Falha ao cadastrar Produto!',
                data: e
            });

        });
};

//put update
exports.put = (req, res, next) => {
    Product
        .findByIdAndUpdate(req.params.id, {
            $set: {
                title: req.body.title,
                description: req.body.description,
                price: req.body.price,
                slug: req.body.slug
            }
        })
        .then(x => {
            res.status(200).send({ message: 'Produto atualizado com sucesso!' });
        }).catch(e => {
            res.status(400).send({
                message: 'Falha ao atualizar Produto!',
                data: e
            });

        });
}

//Delete
exports.delete = (req, res, next) => {
    Product
        .findByIdAndDelete(req.body.id)
        .then(x => {
            res.status(200).send({
                message: 'Produto removido com sucesso!'
            });
        }).catch(e => {
            res.status(400)
                .send({
                    message: 'Falha ao atualizar Produto!',
                    data: e
                });
        });
}