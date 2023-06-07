"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const node_fetch_1 = __importDefault(require("node-fetch"));
dotenv_1.default.config();
const app = (0, express_1.default)();
// const app = express();
app.use(body_parser_1.default.json());
// app.use(
//   cookieSession({
//     maxAge: 30 * 24 * 60 * 60 * 1000,
//     keys: [keys.cookieKey],
//   })
// );
// app.use(passport.initialize());
// app.use(passport.session());
// if (["production"].includes(process.env.NODE_ENV)) {
//   app.use(express.static("client/build"));
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve("client", "build", "index.html"));
//   });
// }
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
app.get("/getAccessToken", async (req, res) => {
    console.log(req.query.code);
    const params = "?client_id=" +
        CLIENT_ID +
        "&client_secret=" +
        CLIENT_SECRET +
        "&code=" +
        req.query.code;
    const response = await (0, node_fetch_1.default)("https://github.com/login/oauth/access_token" + params, {
        method: "POST",
        headers: {
            Accept: "application/json",
        },
    });
    const data = response.json();
    console.log(data);
    res.json(data);
});
// getUserData
app.get("/getUserData", async (req, res) => {
    req.get("Authorization");
    const response = await (0, node_fetch_1.default)("https://api.github.com/user", {
        method: "GET",
        headers: {
            Authorization: "Bearer" + req.get("Authorization"), // Bearer Access Token
        },
    });
    const data = response.json();
    console.log(data);
    res.json(data);
});
// app.get("/", (req, res) => {
app.get("/", (req, res) => {
    res.send({ response: "Hello World", test: process.env.TEST_VARIABLE });
});
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Listening on port`, PORT);
});
