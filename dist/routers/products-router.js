"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsRouter = void 0;
const express_1 = require("express");
exports.productsRouter = (0, express_1.Router)({});
const products = [{ id: 1, title: 'tomato' }, { id: 2, title: 'orange' }];
exports.productsRouter.get('/', (req, res) => {
    if (req.query.title) {
        let searchString = req.query.title.toString();
        res.send(products.find(p => p.title.indexOf(searchString) > -1));
    }
    else
        res.send(products);
});
exports.productsRouter.get('/:id', (req, res) => {
    let product = products.find(p => p.id === +req.params.id);
    if (product) {
        res.send(product);
    }
    else
        res.send(404);
});
exports.productsRouter.post('/', (req, res) => {
    const newProduct = { id: +(new Date()),
        title: req.body.title
    };
    products.push(newProduct);
    res.status(201).send(newProduct);
});
exports.productsRouter.put('/:id', (req, res) => {
    let product = products.find(p => p.id === +req.params.id);
    if (product) {
        product.title = req.body.title;
        res.send(product);
    }
    else
        res.send(404);
});
exports.productsRouter.delete('/:id', (req, res) => {
    for (let i = 0; products.length > i; i++) {
        if (products[i].id === +req.params.id) {
            products.splice(i, 1);
            res.send(204);
            return;
        }
        else
            res.send(404);
    }
});
