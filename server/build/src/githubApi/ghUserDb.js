"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGithubUser = void 0;
const axios_1 = __importDefault(require("axios"));
// getUserData
const getGithubUser = async (token) => {
    const options = {
        method: "GET",
        headers: {
            Authorization: token, // Bearer Access Token
        },
        url: "https://api.github.com/user",
    };
    const data = await (0, axios_1.default)(options);
    const payload = { ...data.data };
    return payload;
};
exports.getGithubUser = getGithubUser;
