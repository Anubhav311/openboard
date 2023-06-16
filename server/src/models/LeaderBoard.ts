import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name already exists"],
    unique: true,
  },
});

export const LeaderBoard = mongoose.model("LeaderBoard", schema);
