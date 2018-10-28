'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const app = express();
const router = express.Router();

// Conecta ao Banco
mongoose.connect('mongodb://balta:balta123@ds141613.mlab.com:41613/nodstart');

if (mongoose == true) {
    console.log("success");

} else {
    console.log("não pode ser acessado sem Conexão com internet");

}

//Carrega as Rotas
const indexRoutes = require('./routes/index-route');
const productsRoutes = require('./routes/products-route');



//Fim das Rotas

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));


app.use('/', indexRoutes);
app.use('/products', productsRoutes);


module.exports = app;