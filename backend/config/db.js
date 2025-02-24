import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.DATABASE_URL);
    console.log(`MongoDB connected ${connect.connection.host}`);
  } catch (error) {
    if (error) console.log(`There is error to connect.${error.message}`);
    process.exit(1);
  }
};
