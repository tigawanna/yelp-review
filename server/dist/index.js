"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config.js");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const http_1 = require("http");
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const jsonParser = body_parser_1.default.json();
const PORT = process.env.PORT || 4000;
const server = (0, http_1.createServer)(app);
(async () => {
    app.use((0, cors_1.default)());
    app.options('*', (0, cors_1.default)());
    app.get('/', (_, res) => {
        res.send({ message: "We did it!, the server works" });
    });
    app.post('/users', jsonParser, function (req, res) {
        var _a;
        const user = (_a = req.body) === null || _a === void 0 ? void 0 : _a.user.username;
        res.send({ data: user });
    });
    server.listen(PORT, () => {
        console.log(`listening on  http://localhost:${PORT}`);
    });
})().catch(e => console.log('error on server ====== ', e));
//# sourceMappingURL=index.js.map