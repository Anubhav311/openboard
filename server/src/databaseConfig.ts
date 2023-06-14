import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectToDatabase = async (): Promise<void> => {
  const url: string = process.env.MONGODB_URL as string;
  try {
    await mongoose.connect(url);
    console.log("Connected to MongoDB");
  } catch (error: any) {
    console.error("Failed to connect to MongoDB", error);
  }
};

export default connectToDatabase;
