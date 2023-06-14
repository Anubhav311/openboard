"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const githubUserRouter_1 = __importDefault(require("./routes/githubUserRouter"));
const databaseConfig_1 = __importDefault(require("./databaseConfig"));
const app = (0, express_1.default)();
(0, databaseConfig_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use("/", authRoutes_1.default);
app.use("/getUserData", githubUserRouter_1.default);
app.get("/", (req, res) => {
    res.send({ response: "Hello World" });
});
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Listening on port`, PORT);
});
