"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const home_1 = __importDefault(require("./home"));
const routes = (0, express_1.Router)();
const baseUrl = '/api/v1';
routes.use(`${baseUrl}`, home_1.default);
exports.default = routes;
