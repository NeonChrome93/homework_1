"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//create express app
const app = (0, express_1.default)();
const port = process.env.PORT || 5000;
const products = [{ title: 'tomato' }, { title: 'orange' }];
const addresses = [{ value: 'Vasumy 16' }, { value: 'Stolichnay 11' }];
app.get('/products', (req, res) => {
    let hello = "Hey Samirai Yaroslaw";
    res.send(products);
});
app.get('/addresses', (req, res) => {
    let hello = "Hey Samirai Yaroslaw";
    res.send(addresses);
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
