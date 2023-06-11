"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAccessTokenController = void 0;
const auth_1 = require("../auth/auth");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const getAccessTokenController = async (req, res) => {
    const params = "?client_id=" +
        CLIENT_ID +
        "&client_secret=" +
        CLIENT_SECRET +
        "&code=" +
        req.query.code;
    try {
        const token = await (0, auth_1.getAccessToken)(params);
        res.json(token);
    }
    catch (error) {
        console.error("Error retrieving users: ", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
exports.getAccessTokenController = getAccessTokenController;
