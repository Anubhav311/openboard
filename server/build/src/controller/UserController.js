"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGithubUserController = void 0;
const ghUserDb_1 = require("../githubApi/ghUserDb");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const getGithubUserController = async (req, res) => {
    let token = req.get("Authorization") || "";
    try {
        if (token.length == 0) {
            throw "invalid token recieved";
        }
        const user = await (0, ghUserDb_1.getGithubUser)(token);
        res.json(user);
    }
    catch (error) {
        console.error("Error retrieving users: ", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
exports.getGithubUserController = getGithubUserController;
