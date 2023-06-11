"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const { Schema } = mongoose;
const userSchema = new Schema({
    googleId: String,
    displayName: String,
});
mongoose.model("User", userSchema);
