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
    const { name, avatar_url, login, followers, following, twitter_username, html_url, linkedin_username, youtube_username, } = data.data;
    const user = {
        name,
        avatar: avatar_url,
        username: login,
        followers,
        following,
        twitter: twitter_username,
        github: html_url,
        linkedin: linkedin_username,
        youtube: youtube_username,
    };
    return user;
};
exports.getGithubUser = getGithubUser;
