"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const axios_1 = __importDefault(require("axios"));
const cors_1 = __importDefault(require("cors"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use("/", authRoutes_1.default);
// getUserData
app.get("/getUserData", async (req, res) => {
    const options = {
        method: "GET",
        headers: {
            Authorization: req.get("Authorization"), // Bearer Access Token
        },
        url: "https://api.github.com/user",
    };
    const data = await (0, axios_1.default)(options);
    const payload = { ...data.data };
    res.json(payload);
});
app.get("/", (req, res) => {
    res.send({ response: "Hello World", test: process.env.TEST_VARIABLE });
});
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Listening on port`, PORT);
});
