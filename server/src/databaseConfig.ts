import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectToDatabase = async (): Promise<void> => {
  try {
    const url: string = process.env.MONGODB_URL as string;
    const { connection } = await mongoose.connect(url);
    console.log("Connected to MongoDB", connection.host);
  } catch (error: any) {
    console.error("Failed to connect to MongoDB", error);
  }
};

export default connectToDatabase;
