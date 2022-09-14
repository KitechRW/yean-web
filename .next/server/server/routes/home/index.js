"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gamesRouter = (0, express_1.Router)();
gamesRouter.get('/', (req, res) => {
    res.send('Welcome to yean api');
});
exports.default = gamesRouter;
