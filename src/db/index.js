import mongoose from "mongoose";
import { DB_Name } from "../constants.js";

const connectDB = async () => {
  try {
    const connectioninstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_Name}`
    );
    console.log(
      `\n Connected to MongoDB !! DB Host: ${connectioninstance.connection.host}\n`
    );
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
    process.exit(1);
  }
};
export default connectDB;
