"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require("express");
const express_1 = __importDefault(require("express"));
// require("dotenv").config();
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// const mongoose = require("mongoose");
// const cookieSession = require("cookie-session");
// const passport = require("passport");
// const bodyParser = require("body-parser");
// const keys = require("./config/keys");
// require("./models/User");
// require("./models/Blog");
// require("./services/passport");
// mongoose.Promise = global.Promise;
// mongoose.connect(keys.mongoURI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
const app = (0, express_1.default)();
// const app = express();
// app.use(bodyParser.json());
// app.use(
//   cookieSession({
//     maxAge: 30 * 24 * 60 * 60 * 1000,
//     keys: [keys.cookieKey],
//   })
// );
// app.use(passport.initialize());
// app.use(passport.session());
// require("./routes/authRoutes")(app);
// require("./routes/blogRoutes")(app);
// if (["production"].includes(process.env.NODE_ENV)) {
//   app.use(express.static("client/build"));
//   const path = require("path");
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve("client", "build", "index.html"));
//   });
// }
// app.get("/", (req, res) => {
app.get("/", (req, res) => {
    res.send({ response: "Hello World", test: process.env.TEST_VARIABLE });
});
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Listening on port`, PORT);
});
