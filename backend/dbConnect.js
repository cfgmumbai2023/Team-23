const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    // Replace 'mongodb://localhost/phone_auth' with your MongoDB connection string
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit process with a failure code
  }
};

module.exports = connectDB;