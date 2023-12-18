import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables from a .env file
dotenv.config();
const uri = process.env.MONGO_URI || "";

async function connectToDatabase() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
}

export default connectToDatabase;
