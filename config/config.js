const mongoose = require("mongoose");

require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;

const dbConnection = async () => {
  try {
    console.log('Database connected')
    await mongoose.connect(MONGO_URI);
  } catch (error) {
    console.error(error);
    throw new Error("Failed to connect with database.");
  }
};

module.exports = {
  dbConnection,
};
