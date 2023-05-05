"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressesRouter = void 0;
const express_1 = require("express");
const addresses = [{ id: 1, value: 'Vasumy 16' }, { id: 2, value: 'Stolichnay 11' }];
exports.addressesRouter = (0, express_1.Router)({});
exports.addressesRouter.get('/', (req, res) => {
    if (req.query.value) {
        let searchString = req.query.value.toString();
        res.send(addresses.find(p => p.value.indexOf(searchString) > -1));
    }
    else
        res.send(addresses);
});
exports.addressesRouter.get('/:id', (req, res) => {
    let product = addresses.find(p => p.id === +req.params.id);
    if (product) {
        res.send(product);
    }
    else
        res.send(404);
});
exports.addressesRouter.post('/', (req, res) => {
    const newProduct = { id: +(new Date()),
        value: req.body.value
    };
    addresses.push(newProduct);
    res.status(201).send(newProduct);
});
exports.addressesRouter.put('/:id', (req, res) => {
    let product = addresses.find(p => p.id === +req.params.id);
    if (product) {
        product.value = req.body.value;
        res.send(product);
    }
    else
        res.send(404);
});
exports.addressesRouter.delete('/:id', (req, res) => {
    for (let i = 0; addresses.length > i; i++) {
        if (addresses[i].id === +req.params.id) {
            addresses.splice(i, 1);
            res.send(204);
            return;
        }
        else
            res.send(404);
    }
});
