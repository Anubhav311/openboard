import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

export const LeaderBoard = mongoose.model("LeaderBoard", schema);
