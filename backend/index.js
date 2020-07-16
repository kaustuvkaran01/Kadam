const express = require("express");
const connectDB = require("./config/db");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const passport = require("passport");
const path = require("path");

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

//Serve static assets

app.use(express.static(path.join(__dirname, "build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

const userRouter = require("./routes/User");
app.use("/user", userRouter);
const adminRouter = require("./routes/Admin");
app.use("/admin", adminRouter);
const authRouter = require("./routes/Auth");
app.use("/auth", authRouter);
app.listen(5000, () => {
  console.log("Listening on 5000 port");
});
