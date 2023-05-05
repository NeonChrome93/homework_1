"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const video_routers_1 = require("./routers/video-routers");
const video_routers_2 = require("./routers/video-routers");
//create express app
const app = (0, express_1.default)();
const port = process.env.PORT || 5000;
const parserMiddleware = (0, body_parser_1.default)({});
app.use(parserMiddleware);
app.use('/videos', video_routers_1.videoRouters);
app.use('/testing/all-data', video_routers_2.deleteRouters);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
