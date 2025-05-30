const express = require("express");
const userRouter = require("./routers/userRouter");
require('dotenv').config();
const connectDB = require("./mongoDb/mongoDb");

connectDB();
const app = express();


/**
 *
 * Application middleware
 * Route level middleware
 * Error hanlding middleware
 * Built-in middleware
 * Third party middleware
 *
 */

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", userRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
