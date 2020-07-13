const express = require("express");
const userRouter = express.Router();
const passport = require("passport");
const passportConfig = require("../passport");
const shortid = require("shortid");
const JWT = require("jsonwebtoken");
const User = require("../models/User");
const Donate = require("../models/Donate");
const Fund = require("../models/Funds");
const Invoice = require("../models/Invoice");
const Razorpay = require("razorpay");
const signToken = (userID) => {
  return JWT.sign(
    {
      iss: "KADAMBEST",
      sub: userID,
    },
    "KADAMBEST",
    { expiresIn: "1h" }
  );
};

userRouter.post("/register", (req, res) => {
  const { email, username, password, firstName, lastName } = req.body;
  const createdAt = Date.now();
  User.findOne({ username }, (err, user) => {
    if (err)
      res
        .status(500)
        .json({ message: { msgBody: "Error has occured", msgError: true } });
    if (user)
      res
        .status(400)
        .json({ message: { msgBody: "Username taken", msgError: true } });
    else {
      const newUser = new User({
        email,
        username,
        password,
        firstName,
        lastName,
        createdAt,
      });
      newUser.save((err) => {
        if (err || password == null)
          res.status(500).json({
            message: { msgBody: "Error has occured", msgError: true },
          });
        else {
          res.status(201).json({
            message: {
              msgBody: "Account created Successfully",
              msgError: true,
            },
          });
        }
      });
    }
  });
});

userRouter.post(
  "/login",
  passport.authenticate("local", { session: false }),
  (req, res) => {
    if (req.isAuthenticated()) {
      const { _id, username } = req.user;
      const token = signToken(_id);
      res.cookie("access_token", token, { httpOnly: true, sameSite: true });
      res.status(200).json({ isAuthenticated: true, user: { username } });
    }
  }
);

userRouter.get(
  "/logout",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    req.logout();
    res.clearCookie("access_token");
    res.json({ user: { username: "", role: "" }, success: true });
  }
);

//DEVELOPMENT
userRouter.get(
  "/authenticated",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { username, isVolunteer, isAdmin } = req.user;
    res.status(200).json({
      isAuthenticated: true,
      user: { username, isVolunteer, isAdmin },
    });
  }
);

//Volunteer blog approval
userRouter.post(
  "/blogs",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    if (req.isAuthenticated() && req.user.isVolunteer) {
      const { title, author, description } = req.body;
      Blog.create({ title, author, description })
        .then((blog) => res.json({ msg: "Blog added successfully" }))
        .catch((err) =>
          res.status(400).json({ error: "Unable to add this blog" })
        );
    } else {
      res.status(403).json({
        message: { msgBody: "You're not a volunteer,go away", msgError: true },
      });
    }
  }
);

//Donation

// userRouter.post(
//   "/invoice/:id",
//   passport.authenticate("jwt", { session: false }),
//   (req, res) => {
//     if (req.isAuthenticated()) {
//       const { amount } = req.body;
//       const user = req.user._id;
//       const fund = req.params.id;
//       Donate.create({ amount, user, fund })
//         .then((blog) => res.json({ msg: "Updated successfully" }))
//         .catch((err) =>
//           res.status(400).json({ error: "Unable to update the Database" })
//         );
//       Fund.findById(req.params.id)
//         .exec()
//         .then((result) => {
//           result.collected += amount;
//           console.log(result);
//           result.save();
//         });
//     } else {
//       res.status(403).json({
//         message: { msgBody: "Login first", msgError: true },
//       });
//     }
//   }
// );

userRouter.get(
  "/get_profile",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    if (req.isAuthenticated()) {
      const id = req.user._id;
      User.findById(id)
        .then((results) => res.json(results))
        .catch((err) => res.status(404).json({ nouserfound: "No User found" }));
    } else {
      res
        .status(403)
        .json({ message: { msgBody: "Login first", msgError: true } });
    }
  }
);
userRouter.get(
  "/update_profile",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    if (req.isAuthenticated()) {
      const id = req.user._id;
      User.findByIdAndUpdate(id, req.body)
        .then((results) => res.json(results))
        .catch((err) => res.status(404).json({ nouserfound: "No User found" }));
    } else {
      res
        .status(403)
        .json({ message: { msgBody: "Login first", msgError: true } });
    }
  }
);

userRouter.get(
  "/get_donation",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    if (req.isAuthenticated()) {
      const id = req.user._id;
      Invoice.find({ user: id })
        .then((results) => res.json(results))
        .catch((err) => res.status(404).json({ nouserfound: "No User found" }));
    } else {
      res
        .status(403)
        .json({ message: { msgBody: "Login first", msgError: true } });
    }
  }
);

//FUND ID
userRouter.get(
  "/get_donation/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    if (req.isAuthenticated()) {
      const id = req.params.id;
      Fund.findById(id)
        .then((results) => res.json(results))
        .catch((err) => res.status(404).json({ nouserfound: "No User found" }));
    } else {
      res
        .status(403)
        .json({ message: { msgBody: "Login first", msgError: true } });
    }
  }
);

//RAZORPAY
const razorpay = new Razorpay({
  key_id: "rzp_test_oiHBIGXLXkiNPr",
  key_secret: "Kmhzx4uQfMcF7erWvlotjYfC",
});
userRouter.post("/verification", (req, res) => {
  // do a validation
  const secret = "arub3DPqSD9E7N9";

  console.log(req.body);

  const crypto = require("crypto");

  const shasum = crypto.createHmac("sha256", secret);
  shasum.update(JSON.stringify(req.body));
  const digest = shasum.digest("hex");

  console.log(digest, req.headers["x-razorpay-signature"]);
  console.log(req.headers);
  console.log(req.payload);
  // console.log(req.body.payload.order.entity.receipt);
  console.log("request");
  if (digest === req.headers["x-razorpay-signature"]) {
    console.log("request is legit");
    // process it
    //mongoDB
    const {
      email,
      order_id,
      amount,
      captured,
    } = req.body.payload.payment.entity;
    const { user, fund } = req.body.payload.payment.entity.notes;
    console.log("TEST", user, fund);
    const { receipt } = req.body.payload.order.entity;
    Invoice.findOne({ order_id }, (err) => {
      if (err)
        res
          .status(500)
          .json({ message: { msgBody: "Error has occured", msgError: true } });
      else {
        const newInvoice = new Invoice({
          email,
          order_id,
          amount: amount / 100,
          purpose: "fundraiser",
          captured,
          receipt,
          user,
          fund,
        });
        console.log(newInvoice);
        newInvoice.save((err) => {
          if (err) {
            console.log(err);
            res.status(500).json({
              message: { msgBody: "Error has occured", msgError: true },
            });
          } else {
            console.log("SAVED");
            res.status(201).json({
              message: {
                msgBody: "Invoice created Successfully",
                msgError: false,
              },
            });
          }
        });
      }
    });
  } else {
    res.status(500).json({
      message: { msgBody: "Error has occured", msgError: true },
    });
  }
});

userRouter.post("/razorpay", async (req, res) => {
  const payment_capture = 1;
  const currency = "INR";

  const options = {
    amount: req.body.amount,
    currency,
    receipt: shortid.generate(),
    payment_capture,
  };
  console.log(req.body);
  try {
    const response = await razorpay.orders.create(options);
    console.log(response);
    res.json({
      id: response.id,
      currency: response.currency,
      amount: response.amount,
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = userRouter;
