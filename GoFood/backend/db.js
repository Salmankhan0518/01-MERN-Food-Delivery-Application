const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://salmankhan:gofood@cluster0.4anmxby.mongodb.net/foodApp";

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("DB connected successfully");
  } catch (error) {
    console.log("MONGODB connection FAILED !!! ", error);
    process.exit(1);
  }
};

module.exports = connectDB;