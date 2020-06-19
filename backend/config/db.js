const mongoose = require("mongoose");
const keys = require("./keys");
const connectDB = async () => {
  try {
    await mongoose.connect(keys.mongodb.mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });

    console.log("MongoDB is Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
