const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("./models/User");
const JwtStrategy = require("passport-jwt").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("./config/keys");
const facebookStrategy = require("passport-facebook");

const cookieExtractor = (req) => {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies["access_token"];
  }
  return token;
};

//authorization
passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: cookieExtractor,
      secretOrKey: "KADAMBEST",
    },
    (payload, done) => {
      User.findById({ _id: payload.sub }, (err, user) => {
        if (err) return done(err, false);
        if (user) return done(null, user);
        else return done(null, false);
      });
    }
  )
);

passport.use(
  new LocalStrategy((username, password, done) => {
    User.findOne({ username }, (err, user) => {
      if (err) return done(err);
      if (!user) return done(null, false);
      user.comparePassword(password, done);
    });
  })
);

//GOOGLE
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.google.CLIENT_ID,
      clientSecret: keys.google.CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, email, done) => {
      const newUser = {
        googleId: email.id,
        username: email.displayName,
        email: email.emails[0].value,
        firstName: email.name.givenName,
        lastName: email.name.familyName,
        image: email.photos[0].value,
      };
      const filter = { email: email.emails[0].value };
      try {
        let user = await User.findOne(filter);
        if (user) {
          user.googleId = email.id;
          user.image = email.photos[0].value;
          await user.save();
          done(null, user);
        } else {
          user = await User.create(newUser);
          done(null, user);
        }
      } catch (err) {
        console.error(err);
      }
    }
  )
);

//FACEBOOK
passport.use(
  new facebookStrategy(
    {
      clientID: keys.facebook.APP_ID,
      clientSecret: keys.facebook.APP_SECRET,
      callbackURL: "/auth/facebook/callback",
      profileFields: ["emails", "name", "displayName", "photos"],
    },
    async (accessToken, refreshToken, profile, email, done) => {
      const newUser = {
        facebookId: email.id,
        username: email.displayName,
        email: email.emails[0].value,
        firstName: email.name.givenName,
        lastName: email.name.familyName,
        image: email.photos[0].value,
      };
      const filter = { email: email.emails[0].value };
      try {
        let user = await User.findOne(filter);

        if (user) {
          user.facebookId = email.id;
          user.image = email.photos[0].value;
          await user.save();
          done(null, user);
        } else {
          user = await User.create(newUser);
          done(null, user);
        }
      } catch (err) {
        console.error(err);
      }
    }
  )
);
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => done(err, user));
});
