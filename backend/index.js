const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
app.use(cookieParser());
app.use(express.json());

mongoose.connect(
  "mongodb://localhost:27017/mernauth",
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  () => {
    console.log("successfully connected to database");
  }
);

//ROUTES
const index = require("./routes/index");
app.use("/", index);
const userRouter = require("./routes/User");
app.use("/user", userRouter);
const adminRouter = require("./routes/Admin");
app.use("/admin", adminRouter);

app.listen(5000, () => {
  console.log("Listening on 5000 port");
});
