const mongoose = require("mongoose");


const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to DB");
  } catch (err) {
    console.log("Error connecting to MongoDB", err.message);
  }
};

module.exports = connectDB;
