"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const url_1 = require("url");
const express_1 = __importDefault(require("express"));
const next_1 = __importDefault(require("next"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = __importDefault(require("./routes"));
const database_1 = __importDefault(require("../apis/database"));
dotenv_1.default.config();
const port = parseInt(process.env.PORT || '3000', 10);
const dev = process.env.NODE_ENV !== 'production';
const app = (0, next_1.default)({ dev, port });
const handle = app.getRequestHandler();
app.prepare().then(async () => {
    const server = (0, express_1.default)();
    server.use(routes_1.default);
    server.get('*', (req, res) => {
        const parsedUrl = (0, url_1.parse)(req.url, true);
        const { pathname } = parsedUrl;
        if ((pathname === null || pathname === void 0 ? void 0 : pathname.startsWith('/uploads')) ||
            (pathname === null || pathname === void 0 ? void 0 : pathname.startsWith('/games'))) {
            parsedUrl.pathname = `/api${pathname}`;
            return handle(req, res, parsedUrl);
        }
        return handle(req, res);
    });
    server.post('*', (req, res) => {
        return handle(req, res);
    });
    server.patch('*', (req, res) => {
        return handle(req, res);
    });
    server.delete('*', (req, res) => {
        return handle(req, res);
    });
    server.put('*', (req, res) => {
        return handle(req, res);
    });
    console.log(dev, 'devvvvvvvvvv');
    await database_1.default.sequelize.sync({ force: false, alter: dev });
    server.listen(port, () => {
        // eslint-disable-next-line no-console
        console.log(`> Ready on http://localhost:${port}`);
    });
});
