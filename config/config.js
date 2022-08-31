const mongoose = require("mongoose");

const { MONGO_URI } = require("./keys");

const dbConnection = async () => {
  try {
    await mongoose.connect(MONGO_URI);
  } catch (error) {
    console.error(error);
    throw new Error("Failed to connect with database.");
  }
};

module.exports = {
  dbConnection,
};
