const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://salmankhan:gofood@cluster0.4anmxby.mongodb.net/gofoodmern";

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("DB connected successfully");
    const fetchedData = await mongoose.connection.db.collection("food_items")
    const data = await fetchedData.find({}).toArray();
    console.log("Connected to:", mongoose.connection.db.databaseName);
    console.log(data)
  } catch (error) {
    console.log("MONGODB connection FAILED !!! ", error);
    process.exit(1);
  }
};

module.exports = connectDB;