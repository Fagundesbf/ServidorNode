'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('Product');
const ValidationContract = require('../validators/fluent-validator');
const repository = require('../repositories/product-repository');

//GET
exports.get = (req, res, next) => {
    repository
        .get()
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
}

//GET
exports.getBySlug = (req, res, next) => {
    repository
        .getBySlug(req.params.slug)
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
}

//GET
exports.getById = (req, res, next) => {
    repository
        .getById(req.params.id)
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
}

//GET
exports.getByTag = (req, res, next) => {
    repository
        .getByTag(req.params.tag)
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
}

//Post
exports.post = (req, res, next) => {
    let contract = new ValidationContract();

    contract.hasMinLen(req.body.title, 3, 'o titulo deve conter pelo menos 3 caracters');
    contract.hasMinLen(req.body.slug, 3, 'o titulo deve conter pelo menos 3 caracters');
    contract.hasMinLen(req.body.description, 3, 'o titulo deve conter pelo menos 3 caracters');

    // se dados forem invalidos

    if (!contract.isValid()) {
        res.status(400).send(contract.errors()).end();
        return;
    }
    repository
        .create(req.body)
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
    repository
        .update(req.params.id, req.body)
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
    repository
        .delete(req.body.id)
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