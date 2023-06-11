"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAccessToken = void 0;
const axios_1 = __importDefault(require("axios"));
const getAccessToken = async (params) => {
    const options = {
        method: "POST",
        headers: {
            Accept: "application/json",
        },
        data: { data: "data" },
        url: "https://github.com/login/oauth/access_token" + params,
    };
    const data = await (0, axios_1.default)(options);
    const payload = { ...data.data };
    return payload;
};
exports.getAccessToken = getAccessToken;
