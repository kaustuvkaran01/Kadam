const express = require("express");
const connectDB = require("./config/db");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const passport = require("passport");

app.use(cookieParser());
app.use(express.json());

//CORS
app.use(cors({ origin: true, credentials: true }));

//Connecting to MongoDB
connectDB();

//Passport
app.use(passport.initialize());

//ROUTES
const index = require("./routes/index");
app.use("/", index);
const userRouter = require("./routes/User");
app.use("/user", userRouter);
const adminRouter = require("./routes/Admin");
app.use("/admin", adminRouter);
const authRouter = require("./routes/Auth");
app.use("/auth", authRouter);
app.listen(5000, () => {
  console.log("Listening on 5000 port");
});
